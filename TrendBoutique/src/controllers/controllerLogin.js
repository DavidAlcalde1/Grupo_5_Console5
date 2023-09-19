const path = require ('path');
const fs = require ('fs');

const controllerLogin = {
    show: (req, res) => {
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')))
        res.render (path.resolve(__dirname, '..', 'views', 'users', 'login'), {products})
    }
} 

module.exports = controllerLogin