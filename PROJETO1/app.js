// Importa os módulos necessários
const express = require('express'); // Framework para criar APIs web
const mysql = require('mysql'); // Módulo para se conectar ao MySQL
const swaggerAutogen = require('swagger-autogen')(); // Geração automática da documentação Swagger
const swaggerui = require('swagger-ui-express'); // Interface visual do Swagger para a API
const app = express(); // Criação da aplicação Express
const port = 3000; // Define a porta onde o servidor irá rodar

// Importa o arquivo gerado com a documentação Swagger
const swaggerFile = require('./swagger_output.json');

// Documento de configuração Swagger (pode ser usado para gerar automaticamente depois)
const doc = {
    info: {
        title: 'Minha API',
        description: 'Descrição da API'
    },
    host: 'localhost:3000',
    schemes: ['http']
};
// Middleware necessário para ler o corpo da requisição como JSON
app.use(express.json());

// Criação da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco'
});

// Endpoint GET: Retorna todos os usuários do banco de dados
app.get('/users', (req, res) => { 
    connection.query("SELECT * FROM user", (error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results);
    });
});

// Endpoint POST: Adiciona um novo usuário ao banco
app.post('/users', (req, res) => { 
    const { Firstname, Lastname, Profession, Age } = req.body;
    const sql = "INSERT INTO user (Firstname, Lastname, Profession, Age) VALUES (?, ?, ?, ?)";
    connection.query(sql, [Firstname, Lastname, Profession, Age], (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json({ message: 'Usuário adicionado!', id: results.insertId });
    });
});

// Endpoint DELETE: Remove um usuário com base no ID fornecido
app.delete('/users/:id', (req, res) => {
    const sql = "DELETE FROM user WHERE id = ?";
    const id = req.params.id;
    connection.query(sql, [id], (error, results) => {
        if (error) return res.status(500).send(error);
        res.json({ message: "Usuário removido", affectedRows: results.affectedRows });
    });
});

// Endpoint GET: Retorna um usuário específico com base no ID
app.get('/users/:id', (req, res) => { 
    connection.query("SELECT * FROM user WHERE Id = ?", [req.params.id], (error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results);
    });
});

// Endpoint GET: Retorna usuários com base na idade e profissão
app.get('/users/:age/:profession', (req, res) => { 
    const age = req.params.age;   
    const profession = req.params.profession;
    
    connection.query("SELECT * FROM user WHERE age = ? AND profession = ?", [age, profession], (error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results);
    });
});

// Endpoint PUT: Atualiza dados de um usuário com base no ID
app.put('/users/:id', (req, res) => { 
    const id = req.params.id;    
    const details = req.body;

    connection.query("UPDATE user SET ? WHERE id = ?", [details, id], (error, results) => {
        if (error) return res.status(500).send(error);
        res.json({ message: "Usuário atualizado", changedRows: results.changedRows });
    });
});

// Inicializa o servidor Express
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
