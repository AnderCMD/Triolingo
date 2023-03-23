const path = require('path');
const express = require('express');
const ControladorUsuario = require('../Controllers/Usuario');

const router = express.Router();

//Get
router.get('/Inicio', ControladorUsuario.getInicio);

//Post
router.post('');

module.exports = router;