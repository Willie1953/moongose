const express = require('express');
const server = express();
const routes = require('../routes/routes');

{/**aca la configuracion del servidor*/}

server.use(express.json()); {/** es un middleware para trabajar con JASO en las solicitude HTTP*/}
server.use('/api', routes);

module.exports = server;