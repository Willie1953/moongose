axios.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(!err) res.send('Abandonando el sitio')
        else res.send("");
    })
});
