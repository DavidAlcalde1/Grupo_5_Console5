const express = require('express');
const router = express.Router();
const path = require('path');

const apiControllerProducts = require('../../controllers/api/apiControllerProducts');

router.get('/api/products', apiControllerProducts.allProducts);

module.exports = router