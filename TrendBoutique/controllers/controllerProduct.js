const productsData = require('../public/data/products.json');




const controllerProducts = {
    listar : (req, res) => {
        res.send(res.render('products/list', { products: productsData }));
    },
    detalle: (req, res) => {
        res.send('Detalle del producto')
    },
    crear: (req, res) => {
        res.send('Producto creado')
    },

};

module.exports = controllerProducts;

