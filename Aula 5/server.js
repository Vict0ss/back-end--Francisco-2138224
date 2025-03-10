const express = require('express') // biblioteca express
const fs = require("fs"); // biblioteca fs 
const { pid } = require('process'); //
const app = express()
const port = 3000

var fileContent = fs.readFileSync("persons.json", "utf8") // lendo arqeuio
var dataobj = JSON.parse(fileContent); // convertendo arquivo pra json
app.get('/users', (req, res) => { // abrindo o  get
  res.send(JSON.parse(fileContent))
})
app.use(express.json()); // aceitar conteudos em json
app.post('/users', (req, res) => { // abrindo novamente mas aceitar dados 
  var newPerson = req.body; // pegando dados 
  var fileContent = fs.readFileSync("persons.json", "utf8") // lendo arqeuio
  var dataobj = JSON.parse(fileContent);
  if (dataobj.data.length > 0) {
    newPerson.id = dataobj.data[dataobj.data.length - 1].id + 1
  }
  else {
    newPerson.id = 1
  }
  dataobj.data.push(newPerson);
  fs.writeFileSync('persons.json', JSON.stringify(dataobj))
  res.send(dataobj)   // resposta que mandou a ppessoa 
})
app.delete('/users/:id', (req, res) => {
  let { id } = req.params; // esta pegando o id do endereço de cima
  let data = JSON.parse(fs.readFileSync("persons.json", "utf8")); // pegando os dados do arquivo
  let filteredData = data.data.filter(i => i.id.toString() !== id.toString()); //filtrando os dados 
  if (filteredData.length === data.data.length) { //verificando  se utilizador existe 
    return res.status(404).send("Utilizador não encontrado!"); // mensagsem caso nao econtre o utilizador 
  }
  data.data = filteredData; //pegando a listra filtrada e subtistuindo a lista do adquivo
  fs.writeFileSync("persons.json", JSON.stringify(data)); // criando nova lista
  res.send(data);// devolvendo pro utilizador a nova lista
});
app.get('/users/:id', (req, res) => { // caminho para o codigo, id é o valor que esta no codigo no .json
  var  { id } = req.params; // e tudo que utilizador coloca na url 
  var data = JSON.parse(fileContent).data.find((i) => i.id.toString() == id.toString()) // parecido ao some, pega intem do array e traz apenas o id ou valor que o utilizador pedir  
  if (data) { // isto e pra saber se tem  
    res.send(data)  //   eviando a resposta  
  } else {   // se nao tiver o id irá mandar a mensagem em baixo
    res.status(404).send('Não foi encontrado nenhum dado!')
  }
})
app.put('/users/:id', (req, res) => {
  const { id } = req.params; // pegando id do endereço 
  let { firstname, lastname, profission, age, gender } = req.body;  // pegando cada informaçao
  let data = JSON.parse(fs.readFileSync("persons.json", "utf8")); // pegando os dados do arquivo
  let item = data.data.find((i) => i.id.toString() == id.toString()) // pegando os dados do arquivo e filtrando com coodição do id 
  if (item) { // verificando se foi econtrado as informaçoes 
    item.firstname = firstname
    item.lastname = lastname
    item.gender = gender
    item.age = age
    item.profission = profission
    fs.writeFileSync('persons.json', JSON.stringify(data)) // pegando dados que foram alterados e adicionado denovo
    res.send(data) //  retornado os dados que foram editados 
  } else {
    res.send('Não foi encontrado nenhum dado!') // informando resposta caso nao seja econtrado nada 
  }
})
app.listen(port, () => { // qual porta abrir 
  console.log(`Example app listening on port ${port}`) // dizer que abriu
})