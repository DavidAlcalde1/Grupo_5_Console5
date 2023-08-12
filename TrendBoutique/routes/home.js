router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.ejs'));
});

router.get('/', (req, res)=> {
    res.render('home')
});

