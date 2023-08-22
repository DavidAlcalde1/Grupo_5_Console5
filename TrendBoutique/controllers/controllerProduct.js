const products = require('../public/data/products.json');


const controllerProducts = {
    listar : (req, res) => {
        console.log(req.query.category);
        const productsByCategory = products.filter( (product) => {
            return product.category === req.query.category;
        });
        res.render('products/list', { products: productsByCategory })
    },
    detalle: (req, res) => {
        res.render('products/detail')
    },
    crear: (req, res) => {
        res.render('products/create')
    },
    edit: (req,res) => {
        res.render('products/:id/edit')
    },
    delete: (req,res) => {
        res.render('products/delete')
    },

}

    module.exports = controllerProducts; 

