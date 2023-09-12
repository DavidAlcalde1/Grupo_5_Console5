const express = require('express');
const controller = require('../controllers/controllerProduct');
const path = require('path');
const router = express.Router();

router.get('/edit.ejs', (req, res)=> {
    res.render('edit')
});

module.exports= router;