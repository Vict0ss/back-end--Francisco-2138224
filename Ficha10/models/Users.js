const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const Users = sequelize.define('Users',{
        user_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
         
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
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        address : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING(15),
            allowNull: false,    
        }
    }
    , {
        tableName: 'users',
        timestamps: false,
    });

    return Users;
    
}