const app = require('./server/server');
require('dotenv').config();
require('./database/config');
const session = require('express-session');
const PORT = process.env.PORT || 8080;

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));

app.get('/con-sesion', (req, res) => {
    if(req.session.contador){
        req.session.contador++;
        res.send(`Visitaste el sitio : ${req.session.contador} veces`);
    } else {
        req.session.contador = 1;
        res.send('Bienvenido a este sitio');
    }
})


app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT}.`);
} );
