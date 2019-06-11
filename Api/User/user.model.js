const sequelize = require('sequelize');
const db = require('../../config/database');
const adminModel = require('../admin/admin.model')


const User = db.define('user', {

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    adminId:{
        type: sequelize.INTEGER
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
        type: sequelize.STRING,
    },
    firstName: {
        type: sequelize.STRING,

    },
    lastName: {
        type: sequelize.STRING,

    },
    image: {
        type: sequelize.STRING,
    },
    isActive: {
        type: sequelize.INTEGER
    }
})

User.belongsTo(adminModel,{foreignKey: 'adminId'})

User.sync({ force: false });
module.exports = User;