const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'superfly',
    database:'traqqerUsers'
})

connection.connect()

connection.query('SELECT * FROM users', function(err, rows, fields) {
    if (err) throw err

    rows.forEach(element => {
        console.log(element.username)
    });
})
