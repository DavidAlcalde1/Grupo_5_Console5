const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/registro', (req, res)=> {
    res.render('registro')
});

module.exports = router;
