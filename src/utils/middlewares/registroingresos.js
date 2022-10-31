const registroIngreso = (req, res, next) => {
    const fechayhora = Date();
    const usuario = req.ip; /**sera el usuario registrado en elsistema */
    // const ingresoanterior = debera existir un registro previo de ingreso (SI o NO)

    console.log(`Ingreso registrado de ${usuario}, el ${fechayhora}, y su ingreso anterior fue el  ........`);
    next()
};

module.exports = registroIngreso;