const routeError = async (req, res) => {
    res.status(404).json({
        error: -1,
        descripcion:`Error en la ruta ${req.url}. Verificar la dirección del metodo ${req.method}, o el metodo no se ha implementado aun`,
    });
};
module.exports = routeError;