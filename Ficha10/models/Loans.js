const {DataTypes, Sequelize} = require('sequelize');
const { loan } = require('../db_sequelize');

module.exports = (Sequelize) => {
    const Users = Sequelize.define('loans',{
        loans_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        first_name:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        address : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING(15),
            allowNull: true,    
        }
    }
    
    , {
        tableName: 'users',
        timestamps: false,
    });

    return loan;
    
}