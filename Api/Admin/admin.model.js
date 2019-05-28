const sequelize = require('sequelize');
const db = require('../../Config/database');


const Admin = db.define('admin', {

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize.INTEGER,
    },
    firstName: {
        type: sequelize.STRING,

    },
    lastName: {
        type: sequelize.STRING,

    },
    address: {
        type: sequelize.STRING,
    },
    isActive: {
        type: sequelize.INTEGER
    }
})



Admin.sync({ force: false });
module.exports = Admin;