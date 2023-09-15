const express = require('express');
const router = express.Router();
const path = require('path');



const controllerProducts = require(path.resolve(__dirname, '..', 'controllers', 'controllerProducts'));
console.log(controllerProducts);

router.get('/products', controllerProducts.index);

router.get('/detail/:id', controllerProducts.show);

module.exports = router;