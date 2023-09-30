const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');


let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'users.json')));

const controllerLogin = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'));
    },
    getIn: (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            let logUser = users.find(user => user.email == req.body.email)
            return res.redirect('/');
        } else {
            return res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'),{errors:errors.mapped() , old:req.body});
        }
    },

    register: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'registro'));
    },

    create: (req, res) => {
        let logRegister = users.find(user => user.email == req.body.email)
        if (typeof logRegister != 'undefined') {
            alert ('existe')
        }
        console.log(logRegister);
        return
        let lastRegister = users.pop();
        users.push(lastRegister);

        let newRegister = {
            id: parseInt(lastRegister.id) + 1,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.genero,
            telefono: req.body.telefono,
            password: bcrypt.hashSync(req.body.password, 10),
            role: req.body.role,
            country: req.body.country,
            image: req.file.filename
        }
        users.push(newRegister);

        let registroActualizado = JSON.stringify(users, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'users.json'), registroActualizado);

        res.redirect('/login');
    }
};



module.exports = controllerLogin