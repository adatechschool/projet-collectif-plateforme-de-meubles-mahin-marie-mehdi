const mysql = require("mysql");


    const connexionDatabase = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: process.env.password,
        database: 'copameba'
    })

module.exports = connexionDatabase;
