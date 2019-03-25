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
        type: sequelize.STRING,
        allowNull: false
    },
    tittleDiscription: {
        type: sequelize.STRING,
        allowNull: false
    },
    Statuse: {
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
        type: sequelize.STRING
    }
})

schedule.belongsTo(user, {foreignKey:'created_by'})
schedule.belongsTo(user, {foreignKey:'updated_by'})

schedule.sync({ force: false  });

module.exports = schedule;