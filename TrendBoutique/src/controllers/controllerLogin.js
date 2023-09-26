const path = require ('path');
const fs = require ('fs');

let login = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'users.json')));

const controllerLogin = {
    show: (req, res) => {
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'users.json')))
        res.render (path.resolve(__dirname, '..', 'views', 'users', 'login'), {products})
    }
} 

module.exports = controllerLogin