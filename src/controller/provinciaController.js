const   agregarProvinciasService = require("../services/provincias/agregarProvincia");
const modificarProvinciasService = require("../services/provincias/modificarProvincia");
const   obtenerProvinciasService = require("../services/provincias/obtenerProvincia");
const  eliminarProvinciasService = require("../services/provincias/eliminarProvincia")

console.log("en el controlador");
const agregarProvincia = (next) => {
    try {
        console.log("jjjjj");
        agregarProvinciasService();
    } catch (error) {
        next(error)
    return    
    };
    return;
}

// const agregarProvincia = () => {
//     console.log("agregar Provincia en el controlador");
//     try {
//         agregarProvinciasService();
//         // res.json({message: "Provincia agregada : " + provincia});
//     } catch (error) {
//         const mng = error.message;
//         res.json({menssage: "Ocurrio un error ahora : " + mng });
//     }
// };

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