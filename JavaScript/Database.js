const mysql = require('mysql');

// Crear un pool de conexiones
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'nombre_de_usuario', //Cambiar
    password: 'contraseña', //Cambiar
    database: 'TriolingoDB' //Cambiar
});

// Conectar a la base de datos
pool.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err.stack);
        return;
    }
    console.log('Conexión exitosa! Conectado como ID: ', pool.threadId);
});

// Ejecutar una consulta
pool.query('SELECT * FROM usuarios', (error, results, fields) => {
    if (error) throw error;
    console.log('Los resultados son: ', results);
});

// Cerrar el pool de conexiones
pool.end();
