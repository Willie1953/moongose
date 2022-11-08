const MunicipioModel = require("../../models/municipios.models")

const eliminarMunicipiosService = async (req) => {
    const municipio = await MunicipioModel.deleteOne({req});
    return municipio;
}
module.exports = eliminarMunicipiosService;
