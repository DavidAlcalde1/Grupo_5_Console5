const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');
const { generateKey } = require('crypto');
let db = require('../../database/models');

const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })


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
        db.Products.findOne({ where: { id: productId } }).then(function (productEdit) {
            res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), { productEdit });
        })
    },
    
    update: (req, res) => {
        req.body.id = req.params.id;
        productId = req.body.id
        if (req.file) {
            req.body.image = req.file ? req.file.filename : req.body.oldImage;
        }
        const updatedData = req.body; // Los nuevos datos del producto a editar
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
    },
    index: function (req,res){
        db.Products.findAll()
        .then(function (products) {
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'list'), { products }, gbUrl);
        })        
    }
}

module.exports = controllerAdmin;