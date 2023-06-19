const mysql = require('mysql2');

// Database Configuration
module.exports.pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 2,
  database: process.env.MYSQL_DATABASE,
});