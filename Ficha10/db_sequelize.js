const{Sequelize,Model, DataTypes} = require('sequelize');
const  sequelize = new Sequelize('mysql://root:password@localhost:3306/ficha10');

const Users = require ("./models/Users")(sequelize);
const Book = require ("./models/Books")(sequelize);
const Loans = require ("./models/loans")(sequelize);


Users.hasMany(Loans, {foreignKey: 'user_id'});
Loans.belongsTo(Users, {foreignKey: 'user_id'});


Users.hasMany(Loans, {foreignKey: 'book_id'});
Loans.belongsTo(Books, {foreignKey: 'book_id'});

(async () => {
    await sequelize.sync();
    const user = await User.create({
        first_name: 'nome',
        last_name: 'nome',
        email: 'email',
        address: 'indereço',
        phone_number: 2025
    });
    console.log(car.toJSON());
  })();


  module.exports = {
    Loans,
    Books,
    Users
  }