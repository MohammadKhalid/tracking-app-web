const sequelize = require('sequelize');
const db = require('../config/database');
const user = require('../Models/Admin');


const persnolNotes = db.define('tbl_persnolNotes', {

    Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tittle: {
        type: sequelize.STRING,
        allowNull: false
    },
    discription: {
        type: sequelize.TEXT
    },
    status: {
        type: sequelize.STRING

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

persnolNotes.belongsTo(user,{foreignKey: 'created_by'} )
persnolNotes.belongsTo(user,{foreignKey: 'updated_by'} )

persnolNotes.sync({ force: false  })

module.exports = persnolNotes