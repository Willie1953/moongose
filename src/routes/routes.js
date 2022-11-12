const express = require('express');
const router = express.Router();
const validationResult = require('express-validator');
const registroActividad = require('../utils/middlewares/registroactividad');
// const deIngreso = require('../services/login/deIngreso');
const auth = require('../utils/middlewares/auth');

const {agregarProvincia, obtenerProvincia, modificarProvincia, eliminarProvincia} = require('../controller/provinciaController');

const deIngreso = require('../controller/authIngresoController');

router.post("/login", deIngreso);

router.post("/provincias", auth, registroActividad, agregarProvincia);
router.get ("/provincias", registroActividad, obtenerProvincia);
router.put ("/provincias/:id", auth, registroActividad, modificarProvincia);
router.delete("/provincias/:nombre", auth, registroActividad, eliminarProvincia);

const {agregarMunicipio, obtenerMunicipio, modificarMunicipio, eliminarMunicipio} = require('../controller/municipioController');

 
router.post("/municipios", auth, registroActividad, agregarMunicipio);
router.get("/municipios", registroActividad, obtenerMunicipio);
router.put("/municipios/:id", auth, registroActividad, modificarMunicipio);
router.delete("/municipios/:id", auth, registroActividad, eliminarMunicipio);
    
module.exports = router;