const express = require('express');
const path = require('path');

const rutaHome = require('./routes/home');
const rutaCarrito = require('./routes/carrito');
const rutaDetalle = require('./routes/detalle');
const rutaLogin = require('./routes/login');
const rutaRegistro = require('./routes/registro');
const rutaProducts = require('./routes/products');

    
const app = express();

// const router = express.Router();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use('/', rutaHome);
app.use('/', rutaCarrito);
app.use('/', rutaDetalle);
app.use('/', rutaLogin);
app.use('/', rutaRegistro);
app.use('/', rutaProducts);

// app.use(router);
// app.use(express.static('public'));
app.listen(3000, ()=> console.log('Servidor Corriendo'));

