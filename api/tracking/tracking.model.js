const sequelize = require('sequelize');
const db = require('../../config/database');
const userModel = require('../user/user.model')
const taskModel = require('../task/task.model')


const Tracking = db.define('tracking', {

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
    latitude: {
        type: sequelize.DOUBLE
    },
    longitude: {
        type: sequelize.DOUBLE
    },
    taskId: {
        type: sequelize.INTEGER
    }
})

Tracking.belongsTo(userModel,{foreignKey: 'userId'})
Tracking.belongsTo(taskModel,{foreignKey: 'taskId'})

Tracking.sync({ force: false });
module.exports = Tracking;