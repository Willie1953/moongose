const MunicipioModel = require("../../models/municipios.models")

const eliminarMunicipiosService = async (req) => {
    const municipio = await MunicipioModel.deleteOne({nombremuni});
    return municipio;
}
module.exports = eliminarMunicipiosService;
