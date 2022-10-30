const express = require('express');
const router = express.Router();
const validationResult = require('express-validator')
const registroActividad = require('../utils/middlewares/registroactividad')

const {agregarProvincia, obtenerProvincia, modificarProvincia, eliminarProvincia} = require('../controller/provinciaController');

router.post("/provincia", registroActividad ,agregarProvincia);
router.get ("/provincia", registroActividad, obtenerProvincia);
router.put ("/provincia/:id", registroActividad, modificarProvincia);
router.delete("/provincia/:nombre", registroActividad, eliminarProvincia);

const {agregarMunicipio, obtenerMunicipio, modificarMunicipio, eliminarMunicipio} = require('../controller/municipioController');

router.post("/municipios", registroActividad, agregarMunicipio);
router.get ("/municipios", registroActividad, registroActividad,obtenerMunicipio);
router.put ("/municipios/:id", registroActividad, modificarMunicipio);
router.delete("/municipios/:nombremuni",
    body('nombremuni').isString,
    body("clave").if(body.clave !== password),
    async (req, res, next) => {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array() });
        }
    next()
    },
   eliminarMunicipio);


module.exports = router;