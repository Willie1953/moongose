const registroIngreso = (req, res, next) => {
    const fechayhora = new Date().now;
    const usuario = body.usuario; /**sera el usuario registrado en elsistema */
    // const ingresoanterior = debera existir un registro previo de ingreso (SI o NO)
    const tipongreso = req.method

    console.log(`Ingreso registrado de ${req.ip} del usuario ${usuario}, con fecha ${fechayhora}, con ingreso anterior el dia ........`)
};

module.exports = registroIngreso;