const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

var connect = mysql.creatConnection({
    user : 'root',
    password : 'password'
})
connection.connect()
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows[0].solution)
})
connection.end()


app.get('/users',function (req, res) { 
    connection.query("select * FROM persons",function (error,results,fields){
        if (error) throw error;
    res.send(results)
    })
  })
/*  app.post('/users',function (req, res) { 

  })
  app.get('/users/:id',function (req, res) { 
    connection.query("select * FROM persons",function (error,results,fields){
        if (error) throw error;
    res.send(results)
    })
  })
*/


app.delete('/users/:id', (req, res) => {
    let { id } = req.params;
    let data = JSON.parse(fs.readFileSync("persons.json", "utf8")); 
    let filteredData = data.data.filter(i => i.id.toString() !== id.toString());  
    if (filteredData.length === data.data.length) { 
      return res.status(404).send("Utilizador não encontrado!"); 
    }
    data.data = filteredData;
    fs.writeFileSync("persons.json", JSON.stringify(data)); 
    res.send(data);
  });