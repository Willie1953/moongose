const auth = (req, res, next) => {
    if (req.session?.user === 'castor' && req.session?.admin) {
       return next()
}
    return res.status(401).send('No esta autorizado a esta operacion')
};

module.exports = auth;