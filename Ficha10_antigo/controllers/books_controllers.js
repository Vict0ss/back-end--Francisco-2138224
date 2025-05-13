const Book = require("../db_sequelize").Books;

async function getAllUsers(req, res ){
    var Books = await Book.findAll();
    res.send(Books);
}

module.exports ={
    getAllUsers
};