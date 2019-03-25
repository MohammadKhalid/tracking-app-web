const sequelize = require('sequelize');
const db = require('../config/database');


const Admin = db.define('tbl_users', {

    Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Firstname: {
        type: sequelize.STRING,
        
    },

    Lastname: {
        type: sequelize.STRING,
    
    },
    Email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true

    },
    Password: {
        type: sequelize.STRING,
        allowNull: false
    },
    CNIC: {
        type: sequelize.INTEGER,
        unique: true
    },

    Phone: {
        type: sequelize.INTEGER,
    },

    Address: {
        type: sequelize.STRING,

    },
    IsActive: {
        type: sequelize.STRING
    },
    Created_by: {
        type: sequelize.INTEGER
    },
    Updated_by: {
        type: sequelize.INTEGER
    }










})

Admin.sync({ force: false  });
module.exports = Admin;