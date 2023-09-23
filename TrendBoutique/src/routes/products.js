const express = require('express');
const router = express.Router();
const path = require('path');



const controllerProducts = require('../controllers/controllerProducts');
console.log(controllerProducts);

router.get('/products', controllerProducts.index);

router.get('/detail/:id', controllerProducts.show);

router.get('/productsCategory/:category', controllerProducts.productsCategory);

module.exports = router;