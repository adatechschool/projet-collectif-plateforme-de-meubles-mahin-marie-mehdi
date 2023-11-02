const mysql = require("mysql");

function connexionDatabase(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        // port: 3306,
        password: process.env.password,
        database: 'copameba'
    })

    // connection.connect()

    return connection
}



module.exports = connexionDatabase;



