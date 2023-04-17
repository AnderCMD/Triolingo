const MySQL = require('mysql2');

const connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Arion2807@#&',
    database: 'triolingo'
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