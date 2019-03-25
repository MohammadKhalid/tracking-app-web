const sequelize = require('sequelize');
const db = require('../config/database')
const user = require('./Admin');
const roles = require('./roles')

const userRoles = db.define('tbl_userRoles', {
    Id : {
        type : sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    isActive : {
        type : sequelize.INTEGER
    },
    created_by : {
        type : sequelize.INTEGER
    },
    updated_by : {
        type : sequelize.INTEGER
    }
})

user.belongsToMany(roles, {through :userRoles});
roles.belongsToMany(user, {through: userRoles});

userRoles.sync({force : false })
module.exports = userRoles