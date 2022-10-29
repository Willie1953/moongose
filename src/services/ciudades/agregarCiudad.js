const CiudadesModel = require("../../models/ciudades.model");

const agregarCiudadService = async (req) => {    
    const ciudad = req.body;
    const newCiudad = new CiudadesModel(ciudad);
    await newCiudad.save();
    return newCiudad;
};
module.exports = agregarCiudadService;