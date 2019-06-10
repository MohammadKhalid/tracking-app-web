const sequelize = require('sequelize');
require('dotenv').config()

let db_name = process.env.DB_NAME;
let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;
let host = process.env.DB_HOST;
let dialect = process.env.DB_DIALECT;
let db_port = process.env.DB_PORT;

module.exports = new sequelize(db_name,user, password, {
    host :host,
    port : db_port,
    dialect :dialect,
    operatorsAliases : false,
    pool : {
        max: 5 ,
        min : 0 ,
        acquire : 30000,
        idle : 10000
    }
})