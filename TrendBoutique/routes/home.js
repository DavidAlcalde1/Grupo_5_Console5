router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.ejs'));
});

app.get('/', (req, res)=> {
    res.render('home')
});

