const express = require('express');
require('dotenv').config();
require('./database/config')

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log(`Servidor levantado en puerto ${PORT}`);
} )