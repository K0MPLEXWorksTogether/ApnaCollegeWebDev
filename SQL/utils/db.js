require('dotenv').config()
const mysql = require('mysql2/promise');  


const pool = mysql.createPool({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,  
  queueLimit: 0,
});

module.exports = pool; 

