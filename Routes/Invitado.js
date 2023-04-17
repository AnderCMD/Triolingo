const path = require('path');
const express = require('express');
const MySQL = require('mysql2');
const Conexion = require('../Util/Database');
const ControladorInvitado = require('../Controllers/Invitado');
const ModeloUsuarios = require('../Models/Usuarios');


const router = express.Router();

//Get & Post
router.get('/', ControladorInvitado.getIndex);

router.get('/Login', ControladorInvitado.getLogin);
router.post('/Login', ModeloUsuarios.postLogin);

router.get('/Registrarse', ControladorInvitado.getRegistrarse);
router.post('/Registrarse', ModeloUsuarios.postRegistrarse);

module.exports = router;