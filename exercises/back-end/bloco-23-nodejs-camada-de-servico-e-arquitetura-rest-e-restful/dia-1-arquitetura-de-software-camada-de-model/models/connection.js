const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: 'localhost',
  user: 'julio',
  password: 'ju552323',
  database: 'users'
});

module.exports = connection;