const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: function(req,file,cb) {
        cb(null, 'user-' + Date.now() + path.extname(file.originalname)); 
    }
})

const upload = multer({storage : storage});

const controllerLogin = require(path.resolve(__dirname, '..', 'controllers', 'controllerLogin'))

router.get('/login', controllerLogin.show)
router.get('/login/edit/:id', controllerLogin.edit);

module.exports = router