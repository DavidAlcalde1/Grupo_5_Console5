const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const {body} = require('express-validator');
const access = require('../../src/routes/access');
//const { validateCreate } = require('../validators/usersValidators') 

const app = express();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
        cb(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage });

const controllerLogin = require(path.resolve(__dirname, '..', 'controllers', 'controllerLogin'));
// let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'users.json')));

const bcrypt = require('bcryptjs');
let validation = [
    body('email').isEmail().withMessage('Debe ingresar un email válido'),
    body('email').custom(value => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == value) {
                return true
            }
        }
        return false
    }).withMessage('El usuario no se encuentra registrado'),
    body('password').custom((value, { req }) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if (bcrypt.compareSync(value, users[i].password)) {
                    console.log("todo ok", users[i].password)
                    return true
                } else {
                    console.log("falló", users[i].password)
                    return false
                }
            }
        }
    }).withMessage('Clave invalida')
]

let validationRegister = [
    body('first_name').isLength({min:2}).withMessage('El nombre no puede tener menos de 2 caracteres'),
    body('last_name').isLength({min:2}).withMessage('El apellido no puede tener menos de 2 caracteres'),
    body('email').isEmail().withMessage('Debe registrar un email válido'),
    body('email').custom(value => {
        let logRegister = users.find(user => user.email == value)
        if (typeof logRegister == 'undefined') {
            return true
        }
        return false
    }).withMessage('El email ingresado ya se encuentra registrado'),
    body.apply('image').custom((value, {req}) => {
        if (req.file != 'undefined') {
            return true
        } else {
            return false
        }
    } ).withMessage('Debes elegir tu avatar y debe tener formato: .jpg .jpeg .png')
]




app.use(access);
router.get('/login', controllerLogin.login);
router.post('/login', validation, controllerLogin.getIn);
router.get('/register', controllerLogin.register);
router.post('/register', upload.single('image'), validationRegister, controllerLogin.create);
router.get('/logout', controllerLogin.logout);

module.exports = router