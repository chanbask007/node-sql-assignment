const { sequelize } = require("../models");
const TB_ADMIN = require('../models')

module.exports = (sequelize, DataTypes) =>{
    const TB_USER = sequelize.define('TB_USER',{
       
        user_id :{
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        admin_id :{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        tableName: 'tb_user'
    })
    return TB_USER
}