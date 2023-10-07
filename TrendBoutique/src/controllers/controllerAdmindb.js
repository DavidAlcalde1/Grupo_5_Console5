const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');
const { generateKey } = require('crypto');
let db = require('../../database/models');

//let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')));
const controllerAdmin = {
    show: (req, res) => {
        db.Products.findAll()
        .then(function (products) {
            res.render(path.resolve(__dirname, '..', 'views', 'admin', 'admin'), { products });
        })
    },

    view: (req, res) => {     
        const productId = req.params.id;
        db.Products.findOne({ where: { id: productId } }).then(function (miProducto) {
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'detail'), { miProducto });
        })
    },
    
    edit: (req, res) => {     
        const productId = req.params.id;
        db.Products.findOne({ where: { id: productId } }).then(function (product) {
            res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), { product });
        })
    },

    update: (req, res) => {         
        console.log(req.body);     
        const productId = req.params.id;
        const updatedData = req.body; // Los nuevos datos del producto a editar
        req.body.image = req.file.filename;    
        db.Products.update(updatedData, { where: { id: productId} }).then(()=>{res.redirect('/admin')}).catch(error=>{console.log(error)})
    },

    delete: (req, res) => {
        const productId = req.params.id;
        db.Products.destroy({ where: { id: productId} }).then(()=>{res.redirect('/admin')}).catch(error=>{console.log(error)})
    },

    create: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'create'));
    },

    save: (req, res) => {
        req.body.image = req.file.filename;
        const createData = req.body;
        db.Products.create(createData).then(()=>{res.redirect('/admin')}).catch(error=>{console.log(error)})
    }
}

module.exports = controllerAdmin;