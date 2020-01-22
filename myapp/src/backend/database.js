const mysql = require('mysql2');

// Connecting with the mySQL database created on local machine
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'h00per'
});

module.exports = pool.promise();