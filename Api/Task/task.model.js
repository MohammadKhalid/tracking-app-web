const sequelize = require('sequelize');
const db = require('../../Config/database');
const userModel = require('../User/user.model')


const Task = db.define('task', {

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type: sequelize.INTEGER
    },
    date: {
        type: sequelize.DATEONLY
    },
    completed: {
        type: sequelize.BOOLEAN
    },
    title: {
        type: sequelize.STRING
    },
    description: {
        type: sequelize.TEXT
    }
})

Task.belongsTo(userModel,{foreignKey: 'userId'})

Task.sync({ force: false });
module.exports = Task;