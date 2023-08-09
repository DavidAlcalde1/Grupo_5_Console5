const express = require('express');
const path = require('path');

const app = express();

const router = express.Router();

app.use(express.static('public'));

app.set('view engine', 'ejs');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.ejs'));
});

app.get('/', (req, res)=> {
    res.render('home')
});

app.use(router);
app.use(express.static('public'));
app.listen(3000, ()=> console.log('Servidor Corriendo'));

