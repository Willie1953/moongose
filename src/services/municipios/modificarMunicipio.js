const MunicipiosModel = require("../../models/municipios.models");

// Los datos a modificar en la ciudad son:
// Nombre:
// Fecha fundación: no esta disponible en la BD de donde se obtuvo la información por API
//                  Inicialmente es la fecha actual.

const modificarMunicipiosService = async (req) => {
    const municipio = req.body;
    const {nombremuni} = req.params;
    const updmuni = await MunicipiosModel.findOne({nombremuni});
    updmuni.nombremuni = municipio.nombremuni;
    updmuni.fechafundacion = municipio.fechafundacion;
    await updmuni.save();
}
module.exports = modificarMunicipiosService;