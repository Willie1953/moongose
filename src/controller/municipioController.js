const agregarMunicipioService = require("../services/municipios/agregarMunicipio");
const modificarMunicipioService = require("../services/municipios/modificarMunicipio");
const obtenerMunicipioService = require("../services/municipios/obtenerMunicipio");
const eliminarMunicipioService = require("../services/municipios/eliminarMunicipio");

const agregarMunicipio = async (req, res, next) => {
    try {
        const ciudad = await agregarMunicipioService(res);
        res.json({message: "Municipios agregados : "});
    } catch (error) {
        const mng = error.message;
        res.json({menssage: "Ocurrio un error : " + mng })
    }
};

const obtenerMunicipio = async (req, res, next) => {
    try {
        const municipio = await obtenerMunicipioService();
        res.json({municipio})
    } catch (error) {
        next(error)
    }
    
};

const modificarMunicipio = async (req, res, next) => {
    try {
        await modificarMunicipioService(req);
        res.json({message: "Datos modificados."})
    } catch (error) {
        next(error)
    }
}

const eliminarMunicipio = async (req, res, next) => {
    try {
        await eliminarMunicipioService.deleteOne("nombremuni");
        res.json({menssage: "Municipio eliminado de la base de datos"});
    } catch (error) {
        const mng = error.message;
        res.json({menssage: "Error, el Munucipio indicado no existe : " + mng });
    }
}
module.exports = {agregarMunicipio, obtenerMunicipio, modificarMunicipio, eliminarMunicipio};