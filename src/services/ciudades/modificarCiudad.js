const CiudadesModel = require("../../models/provincias.model");

// Los datos a modificar en la ciudad son:
// Nombre:
// Fecha fundación: no esta disponible en la BD de donde se obtuvo la información por API
//                  Inicialmente es la fecha actual.

const modificarCiudadesService = async (req) => {
    const ciudad = req.body;
    const {nombreciudad} = req.params;
    const updciudad = await CiudadesModel.findOne({nombreciudad});
    updciudad.nombreciudad = ciudad.nombreciudad;
    updciudad.fechafundacion = ciudad.fechafundacion;
    await updciudad.save();
}
module.exports = modificarCiudadesService;