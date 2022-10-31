const registroActividad = (req, res, next) => {
    const fechayhora = Date();
    const usuario = req.ip;
    // const ingresoanterior = debera existir un registro previo de ingreso (SI o NO)
    const ingresoA = req.method;

    console.log(`Ingreso de ${usuario}, el ${fechayhora} en ${ingresoA}`);
    next()
};

module.exports = registroActividad;