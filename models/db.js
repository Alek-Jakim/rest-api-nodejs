const mysql = require('mysql');
const dbConfig = require('../config/db.config');

//Create database connection

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
})

connection.connect(error => {
    if (error) throw error;
    console.log('Connected to the database successfully!');
})

module.exports = connection;