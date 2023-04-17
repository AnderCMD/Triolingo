const MySQL = require('mysql2');
const Conexion = require('../Util/Database');

// POST - Registrarse
exports.postRegistrarse = (req, res, next) => {
    const { Nombre, Apellido, Fecha_Nacimiento, Correo_Electronico, Contrasena, Clave_Escuela } = req.body;

    Conexion.execute(
        'INSERT INTO Usuarios (Nombre, Apellido, Fecha_Nacimiento, Correo_Electronico, Contrasena, Clave_Escuela) VALUES (?, ?, ?, ?, ?, ?)',
        [Nombre, Apellido, Fecha_Nacimiento, Correo_Electronico, Contrasena, Clave_Escuela],
        (error, results, fields) => {
            if (error) {
                console.log('Error al registrar usuario: ', error);
                return res.redirect('/Registrarse');
            }
            console.log('Usuario registrado exitosamente!');
            return res.redirect('/Login');
        }
    );
};

// POST - Login
exports.postLogin = (req, res, next) => {
    const { Correo_Electronico, Contrasena } = req.body;

    Conexion.execute(
        'SELECT * FROM Usuarios WHERE Correo_Electronico = ? AND Contrasena = ?',
        [Correo_Electronico, Contrasena],
        (error, results, fields) => {
            if (error) {
                console.log('Error al iniciar sesión: ', error);
                res.locals.alerta = 'Ocurrió un error al iniciar sesión';
                return res.redirect('/Login');
            }

            if (results.length === 0) {
                console.log('Usuario y/o contraseña incorrectos');
                res.locals.alerta = 'Usuario y/o contraseña incorrectos';
                return res.redirect('/Login');
            }

            console.log('Inicio de sesión exitoso!');
            return res.redirect('/Usuario');
        }
    );
};
