const MunicipioModel = require("../../models/municipios.models")

const eliminarMunicipioService = async (req) => {
    const municipio = await MunicipioModel.deleteOne({nombremuni});
    return municipio;
}
module.exports = eliminarMunicipioService;
