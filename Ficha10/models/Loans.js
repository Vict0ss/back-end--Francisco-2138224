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
        user_id:{
            type: DataTypes.STRING(50),
            foreignKey: true,
            allowNull: false,
        },
        book_id: {
            type: DataTypes.STRING(50),
            foreignKey: true,
            allowNull: false,
        },
        loan_date: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        return_dat : {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }
    
    , {
        tableName: 'loans',
        timestamps: false,
    });

    return loan;
    
}