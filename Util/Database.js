const mysql = require('mysql2');

/* Datos de la base de datos */
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'triolingo',
    password: ''
});

module.exports = pool.promise();