const ProvinciasModel = require("../../models/provincias.model")

const obtenerProvinciasService = async() =>{
    const provincia =  await ProvinciasModel.find();
    return provincia;
}
module.exports = obtenerProvinciasService;