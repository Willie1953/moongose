const CiudadesModel = require("../../models/provincias.model")

const obtenerCiudadesService = async() =>{
    const ciudad =  await CiudadModel.find();
    return ciudad;
}
module.exports = obtenerCiudadesService;