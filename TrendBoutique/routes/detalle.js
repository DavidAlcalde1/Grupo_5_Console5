router.get('/detalle', (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalle.ejs'));
});

app.get('/detalle', (req, res)=> {
    res.render('detalle')
});