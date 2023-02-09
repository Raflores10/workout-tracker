const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

User.init({
    email: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true,
         validate:{
            isEmail:true
         }
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
           isUsername:true
        }
   },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    }
},{
    sequelize,
    hooks:{
        beforeCreate:userObj=>{
            userObj.password = bcrypt.hashSync(userObj.password,4);
            return userObj;
        }
    }
});

module.exports=User