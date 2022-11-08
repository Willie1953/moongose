const ProvinciasModel = require("../../models/provincias.models")


// Las provincias se elinan por su nombre unicamente, como seguridad.

const eliminarProvinciasService = async (req) => {
    const provincia = await ProvinciasModel.deleteOne({req});
    return provincia;
}
module.exports = eliminarProvinciasService;

