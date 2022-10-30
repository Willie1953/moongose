const ProvinciasModel = require("../../models/provincias.models")

const obtenerProvinciasService = async() =>{
    const provincia =  await ProvinciasModel.find();
    return provincia;
}
module.exports = obtenerProvinciasService;