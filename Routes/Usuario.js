const path = require('path');
const express = require('express');
const ControladorUsuario = require('../Controllers/Usuario');
const MySQL = require('mysql2');
const Conexion = require('../Util/Database');


const router = express.Router();

//Get
router.get('/', ControladorUsuario.getNiveles);
router.get('/Nivel-A1', ControladorUsuario.getNivelA1);
router.get('/Nivel-A2', ControladorUsuario.getNivelA2);
router.get('/Nivel-B1', ControladorUsuario.getNivelB1);
router.get('/Nivel-B2', ControladorUsuario.getNivelB2);
router.get('/Inhabilitado', ControladorUsuario.getInhabilitado);
router.get('/NivelAudio', ControladorUsuario.getNivelAuditivo);

module.exports = router;