const express = require('express')
const fs = require("fs");
const app = express()
const port = 3000

var fileContent = fs.readFileSync("persons.json","utf8") // lendo arqeuio
var dataobj = JSON.parse(fileContent); // convertendo arquivo pra json
console.log  ("porque existe codigo",fileContent) // testando so pra saber se da

app.get('/users', (req, res) => { // abrindo o  get
  res.send(JSON.parse(fileContent) ) 
})

app.use(express.json()); // aceitar conteudos em json
app.post('/users', (req, res) => { // abrindo novamente mas aceitar dados 
    var newPerson = req.body; // pegando dados 
    var dataobj = JSON.parse(fileContent);  
    console.log  ("socorro deus",newPerson) // convertendo pra json e adicionado no .json
    dataobj.data.push(newPerson); 
    fs.writeFileSync('persons.json',JSON.stringify(dataobj))
    res.send("new person was added")   // resposta que mandou a ppessoa
  })

app.listen(port, () => { // qual porta abrir 
  console.log(`Example app listening on port ${port}`) // dizer que abriu
})
