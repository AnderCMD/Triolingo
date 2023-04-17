const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const ControladorError = require('./Controllers/Error');

const App = express();

// Configuración de la aplicación
App.set('view engine', 'ejs');
App.set('views', 'Views');

App.use(bodyParser.urlencoded({ extended: false }));
App.use(express.static(path.join(__dirname, 'Public')));

// Definición de las rutas
const RutasAdmin = require('./Routes/Admin');
const RutasInvitado = require('./Routes/Invitado');
const RutasUsuario = require('./Routes/Usuario');

App.use('/Admin', RutasAdmin);
App.use('/Usuario', RutasUsuario);
App.use(RutasInvitado);

// Manejo de errores
App.use(ControladorError.get404);

// Iniciar la aplicación
App.listen(3000);
