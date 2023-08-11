router.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito.ejs'));
});

app.get('/carrito', (req, res)=> {
    res.render('carrito')
});