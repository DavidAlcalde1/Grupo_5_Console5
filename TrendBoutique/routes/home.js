const express = require('express');
const path = require('path');
const router = express.Router();



router.get('/', (req, res)=> {
    res.render('home')
});


function irCategoria (cat){
    const boton = document.getElementsById(id);
    alert(cat);
} 



module.exports = router , irCategoria;

