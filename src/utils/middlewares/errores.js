const routeError = async (req, res) => {
    res.status(404).json({
        error: -1,
        description:`Error en la ruta ${req.url}. Verificar la dirección del metodo ${rec.method}, o el metodo no se ha implementado aun`,
    });
};
module.export = routeError