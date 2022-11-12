// const express = require('express');
// const router = express.Router();
const authIngresoController = require('../../controller/authIngresoController');

const deIngresoService = async () => {
    // router.post('/', authIngresoController);
    await router.post('/', authIngresoController);

}

module.exports = {deIngresoService}



// const app = require('../../server/server');
// const axios = require("axios");


// const autorizoIngresoService = sysnc (req, res) => {
//     axios.get('username, password'), {}
//         console.log("en autorizacion de ingreso");
//     if (res.username !== 'castor' && res.password !== 'glaciar') {
//                 return res.send('')
//             }
//             req.session.user = username
//             req.session.admin = true
//             res.send('Ingreso exitoso')
// })};

// module.exports = autorizoIngresoService

// axios.get('/login', (req, res) => {
//     const {username, password} = req.query
//     if (username !== 'castor' && password !== 'glaciar') {
//         return res.send('')
//     }
//     req.session.user = username
//     req.session.admin = true
//     res.send('Ingreso exitoso')
// });

// axios.post('/logout', (req, res) => {
//     req.session.destroy(err => {
//         if(!err) res.send('Abandonando el sitio')
//         else res.send("");
//     })
// });
// };

// module.exports = autorizoIngresoService