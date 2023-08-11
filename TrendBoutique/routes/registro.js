router.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.ejs'));
});

app.get('/registro', (req, res)=> {
    res.render('registro')
});