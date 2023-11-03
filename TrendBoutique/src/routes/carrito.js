const express = require('express');
const router = express.Router();
const path = require('path');

const controllerCarrito = require(path.resolve(__dirname,'..', 'controllers', 'controllerCarrito'));
router.get('/carrito', controllerCarrito.show);

module.exports = router;