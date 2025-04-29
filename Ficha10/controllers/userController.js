const User = require("../db_sequelize").Users;

async function getAllUsers(req, res ){
    var users = await User.findAll();
    res.send(users);
}

module.exports ={
    getAllUsers
};