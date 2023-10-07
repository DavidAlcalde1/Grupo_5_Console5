const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');
const { generateKey } = require('crypto');
let db = require('../../database/models');

let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')));
const controllerAdmin = {
    show: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'admin'), { products });
    },

    edit: (req, res) => {

        // let userId = req.params.id;
        // console.log(userId);
        // let productEdit = products.find(product => product.id == userId);
        // console.log(productEdit);
        // res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), { productEdit });
        const productId = req.params.id;
        db.Products.findOne({ where: { id: productId } }).then(function (productEdit) {
            res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), { productEdit });
        })
    },

    update: (req, res) => {

        req.body.id = req.params.id;
        req.body.image = req.file ? req.file.filename : req.body.oldImage;

        let updateProducts = products.map(product => {

            if (product.id == req.body.id) {
                product = req.body
            }
            return product;
        });
        let registroActualizado = JSON.stringify(updateProducts, null, 2);
        // fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), updateProducts);
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), registroActualizado);

        res.redirect('/admin');
    },

    delete: (req, res) => {
        const deleteProducts = req.params.id;
        const finalList = products.filter(product => product.id != deleteProducts);
        let deleted = JSON.stringify(finalList, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), deleted);

        // res.render(path.resolve(__dirname, '..', 'views', 'admin', 'admin'),{products});

        res.status(200).redirect('/admin')



    },

    create: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'create'));
    },

    save: (req, res) => {
        let lastId = products.pop();
        products.push(lastId);

        let newProduct = {
            id: parseInt(lastId.id) + 1,
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            quantity: req.body.cantidad,
            category: req.body.categoria,
            size: req.body.talla,
            color: req.body.color,
            image: req.file.filename
        }
        products.push(newProduct);

        let registroActualizado = JSON.stringify(products, null, 2);
        // fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), updateProducts);
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), registroActualizado);

        res.redirect('/admin');

    }

}

module.exports = controllerAdmin;