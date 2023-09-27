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

const controllerLogin = require(path.resolve(__dirname, '..', 'controllers', 'controllerLogin'));

router.get('/login', controllerLogin.login);
router.post('/login', controllerLogin.getIn);
router.get('/register', controllerLogin.register);
router.post('/register', controllerLogin.create);
router.post('/register', upload.single('image'), controllerLogin.create);

module.exports = router