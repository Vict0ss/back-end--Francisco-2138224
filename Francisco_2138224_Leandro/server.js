const express = require('express');
const mysql = require('mysql');
const swaggerAutogen = require('swagger-autogen')();
const swaggerui = require('swagger-ui-express');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    password: 'password',
    database: 'miniprojeto'
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});
const doc = {
    info: {
        title: 'Minha API',
        description: 'Descrição da API'
    },
    host: 'localhost:3000',
    schemes: ['http']
};
const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    const swaggerFile = require('./swagger_output.json');
    app.use('/doc', swaggerui.serve, swaggerui.setup(swaggerFile));

    app.get('/Product', (req, res) => { 
        connection.query("SELECT * FROM Product", (error, results) => {
            if (error) return res.status(500).send(error);
            res.json(results);
        });
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
