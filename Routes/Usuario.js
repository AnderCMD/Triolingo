const path = require('path');
const express = require('express');
const ControladorUsuario = require('../Controllers/Usuario');

const router = express.Router();

//Get
router.get('/', ControladorUsuario.getInicio);
router.get('/Niveles', ControladorUsuario.getNiveles);
router.get('/Nivel-A1', ControladorUsuario.getNivelA1);
router.get('/Nivel-A2', ControladorUsuario.getNivelA2);
router.get('/Nivel-B1', ControladorUsuario.getNivelB1);
router.get('/Nivel-B2', ControladorUsuario.getNivelB2);
router.get('/Inhabilitado', ControladorUsuario.getInhabilitado);

//Post
router.post('');

module.exports = router;