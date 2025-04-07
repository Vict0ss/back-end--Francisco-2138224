const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;


const  sequelize = new sequelize('ficha9', 'root', 'password',{
    dialect: 'mysql'
})

    sequelize.authenticate()
        .then(() =>{
            console.log("conect");
        })
        .catch(err => {
            console.error("unable to conect",err);
        })