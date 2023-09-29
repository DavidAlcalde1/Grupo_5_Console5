const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const {body} = require('express-validator');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage });

const controllerLogin = require(path.resolve(__dirname, '..', 'controllers', 'controllerLogin'));
let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'users.json')));

const bcrypt = require('bcryptjs');
let validation = [
    body('password').custom((value, { req }) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if (bcrypt.compareSync(value, users[i].password)) {
                    return true
                } else {
                    return false
                }
            }
        }
    }).withMessage('clave invalida')
]

let validationRegister = [

]

router.get('/login', controllerLogin.login);
router.post('/login',validation, controllerLogin.getIn);
router.get('/register', controllerLogin.register);
router.post('/register', upload.single('image'), controllerLogin.create);

module.exports = router