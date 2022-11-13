const express = require('express');
const router = express.Router();
const validationResult = require('express-validator');
// const deIngreso = require('../services/login/deIngreso');
const auth = require('../utils/middlewares/auth');

const {agregarProvincia, obtenerProvincia, modificarProvincia, eliminarProvincia} = require('../controller/provinciaController');

const deIngreso = require('../controller/authIngresoController');

router.post("/login", deIngreso);

router.post("/provincias", auth, agregarProvincia);
router.get ("/provincias", obtenerProvincia);
router.put ("/provincias/:id", auth, modificarProvincia);
router.delete("/provincias/:nombre", auth, eliminarProvincia);

const {agregarMunicipio, obtenerMunicipio, modificarMunicipio, eliminarMunicipio} = require('../controller/municipioController');

 
router.post("/municipios", auth, agregarMunicipio);
router.get("/municipios", obtenerMunicipio);
router.put("/municipios/:id", auth, modificarMunicipio);
router.delete("/municipios/:id", auth, eliminarMunicipio);
    
module.exports = router;