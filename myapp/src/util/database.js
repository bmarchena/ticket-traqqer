const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'traqqerUsers',
    password: 'superfly'
});

module.exports = pool.promise();