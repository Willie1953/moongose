const MunicipiosModel = require("../../models/municipios.models")

const obtenerMunicipiosService = async() =>{
    const municipio =  await MunicipiosModel.find();
    return municipio;
}
module.exports = obtenerMunicipiosService;