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
    database: 'projeto1'
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
// parte A 
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
    
    app.put('/Product/:id', (req, res) => { 
        const id = req.params.id;    
        const details = req.body;
    
        connection.query("UPDATE product SET ? WHERE id = ?", [details, id], (error, results) => {
            if (error) return res.status(500).send(error);
            res.json({ message: "Preço atualizado", changedRows: results.changedRows });
        });
    });

    app.get('/Product/date', (req, res) => {
        const { date } = req.query; 
    
        if (!date) {
            return res.status(400).send('Date parameter is required');
        }
    
        const query = "SELECT * FROM Product WHERE created < ?";
        connection.query(query, [date], (error, results) => {
            if (error) return res.status(500).send(error);
            res.json(results);
        });
    });
    

    // parte B 

    app.get('/Product/:id', (req, res) => { 
        connection.query("SELECT * FROM product WHERE Id = ?", [req.params.id], (error, results) => {
            if (error) return res.status(500).send(error);
            res.json(results);
        });
    });
    app.delete('/product/:id', (req, res) => {
        const sql = "DELETE FROM product WHERE id = ?";
        const id = req.params.id;
        connection.query(sql, [id], (error, results) => {
            if (error) return res.status(500).send(error);
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: "O Produto não foi  encontrado ." });
            }
            res.json({ message: "O Produto foi removido.", affectedRows: results.affectedRows });
        });
    });
    
    app.get('/filtrar', (req, res) => {
        const keywords = req.body.keywords;
        const whereClauses = keywords.map(() => `description LIKE ?`).join(' OR ');
        const values = keywords.map(word => `%${word}%`);
    
        const query = `SELECT * FROM Product WHERE ${whereClauses}`;
    
        connection.query(query, values, (error, results) => {
            if (error) return res.status(500).send(error);
            res.json(results);
        });
    });
    
    app.post('/Product/:id/comment', (req, res) => {
        const { id } = req.params;
        const novoComentario = req.body;
    
        connection.query('SELECT comment FROM product WHERE id = ?', [id], (error, results) => {
            if (error) return res.status(500).send(error);
            if (results.length === 0) return res.status(404).json({ message: 'Produto não encontrado' });
    
            const currentComments = results[0].comment;
            currentComments.push(novoComentario);
    
            connection.query(
                'UPDATE product SET comment = ? WHERE id = ?',
                [JSON.stringify(currentComments), id],
                (updateError) => {
                    if (updateError) return res.status(500).send(updateError);
                    res.json({ message: 'Comentário adicionado', productId: id, updatedComments: currentComments });
                }
            );
        });
    }); 


    app.get('/list', (req, res) => {
            connection.query("SELECT * FROM Product", (error, results) => {
            if (error) return res.status(500).send(error);
            results.sort((a, b) => a.price - b.price);
            res.json(results);
        });
    });
    app.listen(port, () => {
        console.log(`Server running on port ${port}`); 
    });
}); 
