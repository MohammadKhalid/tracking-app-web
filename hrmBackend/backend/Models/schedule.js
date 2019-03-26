const sequelize = require('sequelize');
const db = require('../config/database');
const user = require('../Models/Admin');

const schedule = db.define('tbl_schedule', {
    Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Assignto: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    Status: {
        type: sequelize.STRING

    },

    date: {
        type: sequelize.DATE
    },

    created_by: {
        type: sequelize.INTEGER
    },
    updated_by: {
        type: sequelize.INTEGER
    },
    isActive: {
        type: sequelize.INTEGER
    }
})

schedule.belongsTo(user, {foreignKey:'created_by'})
schedule.belongsTo(user, {foreignKey:'updated_by'})
schedule.belongsTo(user, {foreignKey:'Assignto'})

schedule.sync({ force: false  });

module.exports = schedule;