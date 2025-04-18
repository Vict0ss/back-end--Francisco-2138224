const express = require('express');
const mysql = require('mysql2');
const swaggerAutogen = require('swagger-autogen')();
const swaggerui = require('swagger-ui-express');
const app = express();
const port = 3000;

app.use(express.json());  

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
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

    app.post('/Product', (req, res) => { 
        const { name, barcode, department, review, description, weight, price, created, comment } = req.body;
        const d = new Date();
        let time = d.getTime();
        const sql = `INSERT INTO product 
        (name, barcode, department, review, description, weight, price, created, comment) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;           
        connection.query(sql, [name, barcode, department, review, description, weight, price, created,JSON.stringify(comment) ], (error, results) => {
            if (error) {
                return res.status(500).send(error);
            }
            res.json({ message: `O produto  do id ${results.insertId} adicionado`, id: results.insertId });
        });
    });  

     app.get('/Product/department/:department', (req, res) => { 
        const department = req.params.department;    
        connection.query(
            "SELECT * FROM product WHERE department = ?", [department], (error, results) => {
                if (error) return res.status(500).send(error);
                res.json(results);
            }
        );
    });
    
    app.put('/Product/:price', (req, res) => { 
        const price = req.params.price;    
        const details = req.body;
    
        connection.query("UPDATE product SET ? WHERE price = ?", [details, price], (error, results) => {
            if (error) return res.status(500).send(error);
            res.json({ message: "Preço atualizado", changedRows: results.changedRows });
        });
    });
    app.put('/Product/:id', (req, res) => { 
        const id = req.params.id;    
        const details = req.body;
    
        connection.query("UPDATE product SET ? WHERE id = ?", [details, id], (error, results) => {
            if (error) return res.status(500).send(error);
            res.json({ message: "Preço atualizado", changedRows: results.changedRows });
        });
    });
    app.listen(port, () => {
        console.log(`Server running on port ${port}`); 
    });
}); 
