const sequelize = require('sequelize');
const db = require('../config/database');
const user = require('../Models/Admin')


const Attendence = db.define('tbl_Attenence', {

    Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    User_Id: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    Date: {
        type: sequelize.DATE
    },
    Time: {
        type: sequelize.TIME
    },
    Status: {
        type: sequelize.STRING
    },

    Created_by: {
        type: sequelize.INTEGER
    },
    Updated_by: {
        type: sequelize.INTEGER
    },
    isActive: {
        type: sequelize.STRING
    }












})

Attendence.belongsTo(user, {foreignKey: 'User_Id'})
Attendence.belongsTo(user, {foreignKey: 'Created_by'})
Attendence.belongsTo(user, {foreignKey: 'Updated_by'})

Attendence.sync({ force: false  });
module.exports = Attendence;