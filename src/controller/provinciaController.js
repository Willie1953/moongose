const   agregarProvinciasService = require("../services/provincias/agregarProvincia");
const modificarProvinciasService = require("../services/provincias/modificarProvincia");
const   obtenerProvinciasService = require("../services/provincias/obtenerProvincia");
const  eliminarProvinciasService = require("../services/provincias/eliminarProvincia")

const agregarProvincia = async (req, res) => {
    console.log("agregar Provincia en el controlador");
    try {
        await agregarProvinciasService();
        res.json({message: "Provincias agregadas"});
    } catch (error) {
        const mng = error.message;
        res.json({menssage: "Ocurrio un error ahora : " + mng });
    }
};

const obtenerProvincia = async (req, res, next) => {
    try {
        const provincia = await obtenerProvinciasService();
        res.json({provincia})
    } catch (error) {
        next(error)
    }
    
};

const modificarProvincia = async (req, res, next) => {
    try {
        await modificarProvinciasService(req);
        res.json({message: "Fecha de creación modificada."})
    } catch (error) {
        next(error)
    }
}

const eliminarProvincia = async (req, res) => {
    try {
        await eliminarProvinciasService(req)
        res.json({menssage: "Provincia eliminada de la base de datos"})
    } catch (error) {
        const mng = error.message;
        res.json({menssage: "Error, la provincia indicada no existe : " + mng })
    }
}
module.exports = {agregarProvincia, obtenerProvincia, modificarProvincia, eliminarProvincia};