const{Sequelize,Model, DataTypes} = require('sequelize');
const  sequelize = new Sequelize('mysql://root:password@localhost:3306/ficha10');
const Users = require ("./models/Users")(sequelize, DataTypes);
const Book = require("./models/Books")(sequelize, DataTypes);
const Loans = require("./models/Loans")(sequelize, DataTypes);

Users.hasMany(Loans, {foreignKey: 'user_id'});
Loans.belongsTo(Users, {foreignKey: 'user_id'});

Users.hasMany(Loans, {foreignKey: 'books_id'});
Loans.belongsTo(Book, {foreignKey: 'books_id'});

(async () => {
    await sequelize.sync({ force: true });
    
    const users = await Users.create({
        first_name: 'nome',
        last_name: 'nome',
        email: 'test@gmail.com',
        address: 'test',
        password: '(umapassword)',
        phone_number: 2025
    });
    console.log(users.toJSON());
  })();
  module.exports = {
    Loans,
    Book,
    Users
  }
  