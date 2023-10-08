const express = require('express');
const router = express.Router();
const path = require('path');



const controllerProducts = require('../controllers/controllerProducts');

router.get('/products', controllerProducts.index);

router.get('/productsCategory/detail/:id', controllerProducts.show);

router.get('/productsCategory/:category', controllerProducts.productsCategory);

router.get('/search', controllerProducts.search);

module.exports = router;