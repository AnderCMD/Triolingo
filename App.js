const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const ControladorError = require('./Controllers/Error');

const App = express();

App.set('view engine', 'ejs');
App.set('views', 'Views');

const RutasAdmin = require('./Routes/Admin');
const RutasInvitado = require('./Routes/Invitado');
const RutasUsuario = require('./Routes/Usuario');

App.use(bodyParser.urlencoded({ extended: false }));
App.use(express.static(path.join(__dirname, 'Public')));

App.use('/Admin', RutasAdmin);
App.use('/Usuario', RutasUsuario);
App.use(RutasInvitado);

App.use(ControladorError.get404);

App.listen(3000);