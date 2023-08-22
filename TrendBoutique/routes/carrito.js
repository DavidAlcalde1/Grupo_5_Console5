const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/carrito', (req, res)=> {
    res.render('carrito')
});

module.exports = router;
