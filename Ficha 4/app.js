///<> {}
    var name = Object.create(nome);
john.firstname = 'John';
john.lastname = 'Doe';
var age = Object.create(idade);

var gender = Object.create(genero);







const express = require('express')
const fs = require(fs);
const app = express()
const port = 3000

var fileContent = fs.readFileSync("persons.json")
var dataobj = Json.parse(fileContent);


app.get('/users', (req, res) => {
  res.send('dataobj')
})

app.post('/users', (req, res) => {
    var newPerson = req.body;
    res.send(req.body)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})