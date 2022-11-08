const express = require('express');
const router = express.Router();
const validationResult = require('express-validator');
const registroActividad = require('../utils/middlewares/registroactividad');
const auth = require('../utils/middlewares/auth');

const {agregarProvincia, obtenerProvincia, modificarProvincia, eliminarProvincia} = require('../controller/provinciaController');

/** Tanto en provincias como en mnunicipios, llas rutas put y delete existen para este trabajo unicamente */

/** NOTA, el middleware "AUTH" deberia requerir en la vida real el ingreso de un usename y la validacion de administrado. Para seleccionar los POST o DELETE en ambas rutas, se debe eliminar provisoriamente el middleware "AUTH" de esos 4 caminos */


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