const { sequelize } = require("../models");

module.exports = (sequelize, DataTypes) =>{
    const TB_ADMIN = sequelize.define('TB_ADMIN',{
        
        admin_id :{
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        is_active :{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
        admin_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        tableName: 'tb_admin',
    })
    return TB_ADMIN
}