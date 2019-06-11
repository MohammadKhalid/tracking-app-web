const sequelize = require('sequelize');
const db = require('../../config/database');
const userModel = require('../User/user.model')


const personalNotes = db.define('personalNotes', {

    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type: sequelize.INTEGER
    },
    title: {
        type: sequelize.STRING
    },
    description: {
        type: sequelize.TEXT
    }
})

personalNotes.belongsTo(userModel,{foreignKey: 'userId'})

personalNotes.sync({ force: false });
module.exports = personalNotes;