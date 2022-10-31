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
app.get('/login', (req, res) => {
    const {username, password} = req.query
    if (username !== 'castor' && password !== 'glaciar') {
        return res.send('Datos equivocados')
    }
    req.session.user = username
    req.session.admin = true
    res.send('Ingreso exitoso')
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(!err) res.send('Abandonando el sitio')
        else res.send("Hay un error :", err);
    })
});

app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT}.`);
} );
