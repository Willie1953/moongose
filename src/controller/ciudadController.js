const agregarCiudadesService = require("../services/ciudades/agregarCiudad");
const modificarCiudadesService = require("../services/ciudades/modificarCiudad");
const obtenerCiudadesService = require("../services/ciudades/obtenerCiudad");
const elimnarCiudadesService = require("../services/ciudades/eliminarCiudad");

const agregarCiudad = async (req, res, next) => {
    try {
        const ciudad = await agregarCiudadesService(req)
        res.json({message: "Ciudad agregada : " + ciudad})
    } catch (error) {
        const mng = error.message;
        res.json({menssage: "Ocurrio un error : " + mng })
    }
};

const obtenerCiudad = async (req, res, next) => {
    try {
        const ciudad = await obtenerCiudadesService();
        res.json({ciudad})
    } catch (error) {
        next(error)
    }
    
};

const modificarCiudad = async (req, res, next) => {
    try {
        await modificarCiudadesService(req);
        res.json({message: "Datos modificados."})
    } catch (error) {
        next(error)
    }
}

const eliminarCiudad = async (req, res, next) => {
    try {
        await eliminarCiudadesService.deleteOne("nombre");
        res.json({menssage: "Ciudad eliminada de la base de datos"})
    } catch (error) {
        const mng = error.message;
        res.json({menssage: "Error, la ciudad indicada no existe : " + mng });
    }
}
module.exports = {agregarCiudad, obtenerCiudad, modificarCiudad, eliminarCiudad};