const path = require('path');
const express = require('express');
const ControladorInvitado = require('../Controllers/Invitado');

const router = express.Router();

//Get
router.get('/', ControladorInvitado.getIndex);
router.get('/Login', ControladorInvitado.getLogin);
router.get('/Registrarse', ControladorInvitado.getRegistrarse);

//Post
router.post('');

module.exports = router;