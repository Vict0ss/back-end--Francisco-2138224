const express = require('express');
const mysql = require('mysql');
const swaggerAutogen = require('swagger-autogen')();
const swaggerui = require('swagger-ui-express');
const app = express();
const port = 3000;

const swaggerFile = require('./swagger_output.json');

const doc = {
    info: {
        title: 'Minha API',
        description: 'Descrição da API'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

app.get('/users', (req, res) => { 
    connection.query("SELECT * FROM user", (error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results);
    });
});


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

app.delete('users/:id',function(request, response){
  var sql="Delete From users Where id = ?";
  var id = request.params.id;
  connection.query(sql, id, function(error,results,fields){
    if (error) throw error;
    response.setDefaultEncoding("Affect rows:" + results.affectedRows);
  });
});
app.get('/users/:id', (req, res) => { 
    connection.query("SELECT * FROM user WHERE Id = ?", [req.params.id], (error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results);
    });
});

app.get('/users/:age/:profession', (req, res) => { 
      
    var age = req.params.age;   
    var profession = req.params.profession;
    
    connection.query("SELECT * FROM user WHERE age = ? AND profession = ?", [age, profession], (error, results) => {
     
        if (error) return res.status(500).send(error);
        res.json(results);
    });
  });
  

  app.put('/users/:id', (req, res) => { 
      
  var id = request.params.id;   
  var details =request.params.body;
  
  connection.query("update persons set ? where id = ?", [details, id],(error, results) => {
   
      if (error) throw (error);
      Response.sed("changed:" + results.changedRows) 
  });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
