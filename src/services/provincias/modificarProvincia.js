const ProvinciasModel = require("../../models/provincias.model");

// El unico dato permitido para modificar de una provincia, es su fecha de creacion.
// Inicialmente esa fecha es la actual, ya que el dato no figura en la BD de la que se obtuvo
// la información por API.

const modificarProvinciasService = async (req) => {
    const provincia = req.body;
    const {idprov} = req.params;
    const updprovincia = await ProvinciasModel.findOne({idprov});
    updprovincia.datecreacion = provincia.datecreacion;
    await updprovincia.save();
}
module.exports = modificarProvinciasService;