const sequelize = require('sequelize');
const db = require('../config/database');
const user = require('../Models/Admin')


const tracking = db.define('tbl_tracking', {
    Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    User_id: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    Lattitude: {
        type: sequelize.INTEGER
    },
    Longitude: {
        type: sequelize.INTEGER,

    },
    date: {
        type: sequelize.DATE
    },
    time: {
        type: sequelize.TIME
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


tracking.belongsTo(user,{foreignKey : 'created_by'})
tracking.belongsTo(user,{foreignKey : 'updated_by'})
tracking.sync({ force: false });
module.exports = tracking