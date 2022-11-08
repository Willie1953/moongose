const agregarMunicipiosService = require("../services/municipios/agregarMunicipio");
const modificarMunicipiosService = require("../services/municipios/modificarMunicipio");
const obtenerMunicipiosService = require("../services/municipios/obtenerMunicipio");
const eliminarMunicipiosService = require("../services/municipios/eliminarMunicipio");

const agregarMunicipio = async (req, res) => {
    console.log("agregar Municipio en el controlador");
    try {
        await agregarMunicipiosService(res);
        res.json({message: "Municipios agregados "});
    } catch (error) {
        const mng = error.message;
        res.json({menssage: "Ocurrio un error : " + mng })
    }
};

const obtenerMunicipio = async (req, res, next) => {
    try {
        const municipio = await obtenerMunicipiosService();
        res.json({municipio})
    } catch (error) {
        next(error)
    } 
};

const modificarMunicipio = async (req, res, next) => {
    try {
        await modificarMunicipiosService(req);
        res.json({message: "Datos modificados."})
    } catch (error) {
        next(error)
    }
}

const eliminarMunicipio = async (req, res, next) => {
    try {
        await eliminarMunicipiosService(req);
        res.json({menssage: "Municipio eliminado de la base de datos"});
    } catch (error) {
        const mng = error.message;
        res.json({menssage: "Error, el Munucipio indicado no existe : " + mng });
    }
}
module.exports = {agregarMunicipio, obtenerMunicipio, modificarMunicipio, eliminarMunicipio};