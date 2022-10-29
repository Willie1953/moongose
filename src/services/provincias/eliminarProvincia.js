const ProvinciasModel = require("../../models/provincias.model")


// Las provincias se elinan por su nombre unicamente, como seguridad.

const eliminarProvinciasService = async (req) => {
    const provincia = await ProvinciasModel.findOne({nombre});
    return provincia;
}
module.exports = eliminarProvinciasService;

