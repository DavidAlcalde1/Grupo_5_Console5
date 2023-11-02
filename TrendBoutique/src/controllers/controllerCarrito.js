const path = require('path');
const fs = require('fs');

const controllerCarrito = {
    show:  (req,res) =>{
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'carrito'));
    }
};

module.exports = controllerCarrito;