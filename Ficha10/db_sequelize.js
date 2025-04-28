const{Sequelize,Model, DataTypes} = require('sequelize');
const  sequelize = new Sequelize('mysql://root:password@localhost:3306/ficha10');

const use = require ("../sequelize/user")(sequelize);