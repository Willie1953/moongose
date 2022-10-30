const registroActividad = (req, res, next) => {
    const fechayhora = new Date().now;
    const usuario = body.usuario;
    // const ingresoanterior = debera existir un registro previo de ingreso (SI o NO)
    const tipongreso = req.method

    console.log(`Ingreso de ${req.ip}, el ${fechayhora} en ${req.method}`)
};

module.exports = registroActividad;