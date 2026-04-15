const MySQL = require('mysql2');

const connection = MySQL.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if (error) {
        console.clear()
        console.error('\n¡Error al conectar a la base de datos!\n\n', error);
    } else {
        console.clear()
        console.log('\n¡Conexión exitosa a la base de datos!\n');
    }
});

module.exports = connection;