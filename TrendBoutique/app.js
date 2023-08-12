const express = require('express');
const path = require('path');

const rutaHome = require('./routes/home');
const rutaCarrito = require('./routes/carrito');
const rutaDetalle = require('./routes/detalle');
const rutaLogin = require('./routes/login');
const rutaRegistro = require('./routes/registro');

    
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

router.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito.ejs'));
});

app.get('/carrito', (req, res)=> {
    res.render('carrito')
});

router.get('/detalle', (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalle.ejs'));
});

app.get('/detalle', (req, res)=> {
    res.render('detalle')
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.ejs'));
});

app.get('/login', (req, res)=> {
    res.render('login')
});

router.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.ejs'));
});

app.get('/registro', (req, res)=> {
    res.render('registro')
});



app.use(router);
// app.use(express.static('public'));
app.listen(3000, ()=> console.log('Servidor Corriendo'));

