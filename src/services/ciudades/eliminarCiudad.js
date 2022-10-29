const CiudadesModel = require("../../models/provincias.model")

const eliminarCiudadesService = async (req) => {
    const ciudad = await CiudadesModel.deleteOne({nombre});
    return ciudad;
}
module.exports = eliminarCiudadesService;
