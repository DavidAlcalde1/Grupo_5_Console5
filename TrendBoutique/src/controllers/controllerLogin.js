const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const multer = require('multer');
const { log } = require('console');
let db = require('../../database/models');
const session = require('express-session');

const controllerLogin = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'));
    },

    getIn: async (req, res) => {
        try {
            const { email, password } = req.body;
            // Validación de entrada
            if (!email || !password) {
                return res.status(400).json({ message: 'Se requieren correo electrónico y contraseña.' });
            }

            // Buscar al usuario en la base de datos por correo electrónico
            const user = await db.Users.findOne({ where: { email } });

            if (!user) {
                return res.status(401).json({ message: 'Correo electrónico incorrecto.' });
            }

            // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Contraseña incorrecta.' });
            }

            const loggedUser = user
            delete loggedUser.password
            req.session.user = loggedUser

            // Si la autenticación es exitosa, puedes iniciar una sesión o generar un token JWT según tu sistema de autenticación.
            // Aquí asumimos que se ha autenticado correctamente y redirigimos al usuario.
            res.redirect('/');
        } catch (error) {
            console.error("ERROR DEL CATCH", error);
            res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'), { errors: errors.mapped(), old: req.body });

        }
    },

    register: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'registro'));
    },

    create: async (req, res) => {
        req.body.image = req.file.filename
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const createData = req.body

        // Buscar al usuario en la base de datos por correo electrónico
        let email = req.body.email
        const user = await db.Users.findOne({ where: { email } });
        if (user) {
            return res.status(401).json({ message: 'Correo electrónico YA EXISTE.' });
        }

        db.Users.create(createData).then(() => { res.redirect('/login') }).catch(error => { console.log('error atrapado en create', error) })
    },

    logout: (req, res) => {
        req.session.destroy()
        res.cookie('email', null, { maxAge: -1 })
        res.redirect('/')
    },

    detalle: async (req, res) => {
        if (res.locals.user) {
            let user = res.locals.user
            console.log(user);
            res.render(path.resolve(__dirname, '..', 'views', 'users', 'detalle'), { user });
        }
    },
    editProfile: async (req, res) => {
        if (res.locals.user) {
            let user = res.locals.user
            console.log(user);
            res.render(path.resolve(__dirname, '..', 'views', 'users', 'editar'), { user });
        }
    },
    updateProfile: (req, res) => {
        req.body.id = req.params.id

        if (req.file) {
            req.body.image = req.file ? req.file.filename : req.body.oldImage;
        }
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const createData = req.body
        let reqEmail = req.body.email

        db.Users.update(createData, { where: { email: reqEmail} }).then(()=>{res.redirect('/login')}).catch(error=>{console.log(error)})
    }
};

module.exports = controllerLogin