const express = require('express') 
const app = express()
const port = 3000

app.listen(port, () => { // qual porta abrir 
    console.log(`Example app listening on port ${port}`) 
  })


const{Sequelize,Model, DataTypes} = require('sequelize');
const  sequelize = new Sequelize('mysql://root:password@localhost:3306/ficha9');
const Car = require('./models/car')(sequelize, Model, DataTypes);
    

(async () => {
    await sequelize.sync();
    const car = await Car.create({
      brand: 'bmw',
      model: '240',
      licensePlate: '23-43-ZZ',
      color: 'red',
      year: 2025,
      power: 300,
      displacement: 3000
    });
    console.log(car.toJSON());
  })();

  app.get('/', (req, res) => {
    res.send('Texto aleatorio para ver se funciona');
  });
  