const sequelize = require('sequelize');
const db = require('../../config/database');
const adminModel = require('../admin/admin.model')
const userModel = require('../user/user.model')


const Attendance = db.define('attendance', {

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
    checkInTime: {
        type: sequelize.TIME
    },
    checkOutTime: {
        type: sequelize.TIME,
    },
    isPresent: {
        type: sequelize.BOOLEAN,

    },
    createdBy: {
        type: sequelize.INTEGER,

    },
    updatedBy: {
        type: sequelize.INTEGER,
    },
})

Attendance.belongsTo(userModel,{foreignKey: 'userId'})
Attendance.belongsTo(adminModel,{foreignKey: 'createdBy'})
Attendance.belongsTo(adminModel,{foreignKey: 'updatedBy'})

Attendance.sync({ force: false });
module.exports = Attendance;