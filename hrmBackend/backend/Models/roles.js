const sequelize = require('sequelize');
const db = require('../config/database')
const user = require('../Models/Admin')

var roles = db.define('tbl_Roles', {

    Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Role_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    created_by: {
        type: sequelize.INTEGER
    },
    updated_by: {
        type: sequelize.INTEGER
    },
    isActive: {
        type: sequelize.STRING
    }

})
roles.belongsTo(user, {foreignKey : 'created_by'})
roles.belongsTo(user, {foreignKey : 'updated_by'})

roles.sync({ force: false })

module.exports = roles