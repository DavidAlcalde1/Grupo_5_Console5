const path = require('path');
const fs = require('fs');

let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'users.json')));

const controllerLogin = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'));
    },
    getIn: (req, res) => {
        let found = users.find(user => user.email == req.body.email)
        if (typeof found != 'undefined' && found.password == req.body.password) {
            return res.redirect('/');
        } else {
            return res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'), req.body);
        }
    },

    register: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'registro'));
    },

    create: (req, res) => {
        console.log(req.body);
    }
};



module.exports = controllerLogin