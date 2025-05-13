const {DataTypes, Sequelize} = require('sequelize');

module.exports = (Sequelize) => {
    const Users = Sequelize.define('Book',{
        book_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,   
        },
        title:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        author_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        publication_date: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        genre : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        available_copies: {
            type: DataTypes.STRING(15),
            allowNull: false,    
        }
    }
    , {
        tableName: 'books',
        timestamps: false,
    });

    return Users;
    
}