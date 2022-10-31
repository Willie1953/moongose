const express = require('express');
const server = express();
const routes = require('../routes/routes');
const cors = require ('cors');
const routeError = require('../utils/middlewares/errores')
const registroIngreso = require('../utils/middlewares/registroingresos')

{/**aca la configuracion del servidor*/}

server.use(registroIngreso); /**registro de ingreso*/
server.use(cors('*'));
server.use(express.json()); {/** es un middleware para trabajar con JSON en las solicitude HTTP*/}
server.use('/api', routes);
server.use(routeError); /**debe estar al final para que revise que no este la ruta y ejecuta la funcion*/

module.exports = server;