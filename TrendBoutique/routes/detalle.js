const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/detalle', (req, res)=> {
    res.render('detalle')
});


module.exports = router;