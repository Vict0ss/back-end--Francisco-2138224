const express = require('express')
const app = express()
const port = 3000
;;;;

app.get('/users', (req, res) => {
  res.send('dataobj')
})



app.use(express.json());
app.post('/users', (req, res) => {
    var newPerson = req.body;
    dataObj.data.push(newPerson)
    res.send("new person was added")
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})