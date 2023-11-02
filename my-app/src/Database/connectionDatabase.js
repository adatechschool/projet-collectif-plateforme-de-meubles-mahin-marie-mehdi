 const mysql = require('mysql');

function connexionDatabase(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.database.env.password,
        database: 'copameba'
    })

    connection.connect()

    connection.query('SELECT * FROM product_category', (err, row, fields) => {
        if (err) throw err

        console.log('The solution is: ', row[0].solution)
    })

    connection.end();
}

module.exports = connexionDatabase;