router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.ejs'));
});

app.get('/login', (req, res)=> {
    res.render('login')
});