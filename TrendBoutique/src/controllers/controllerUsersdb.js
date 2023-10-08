const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');
const { generateKey } = require('crypto');
let db = require('../../database/models');

//let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')));
const controllerAdmin = {
    show: (req, res) => {
        db.Users.findAll()
        .then(function (Users) {
            res.render(path.resolve(__dirname, '..', 'views', 'admin', 'admin'), { Users });
        })
    },

    view: (req, res) => {     
        const userId = req.params.id;
        db.Users.findOne({ where: { id: userId } }).then(function (miUsuario) {
            res.render(path.resolve(__dirname, '..', 'views', 'Users', 'detail'), { miUsuario });
        })
    },
    
    edit: (req, res) => {     
        const userId = req.params.id;
        db.Users.findOne({ where: { id: userId } }).then(function (user) {
            res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), { user });
        })
    },

    update: (req, res) => {         
        console.log(req.body);     
        const userId = req.params.id;
        const updatedData = req.body; // Los nuevos datos del producto a editar
        req.body.image = req.file.filename;    
        db.Users.update(updatedData, { where: { id: userId} }).then(()=>{res.redirect('/admin')}).catch(error=>{console.log(error)})
    },

    delete: (req, res) => {
        const userId = req.params.id;
        db.Users.destroy({ where: { id: userId} }).then(()=>{res.redirect('/admin')}).catch(error=>{console.log(error)})
    },

    create: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'create'));
    },

    save: (req, res) => {
        req.body.image = req.file.filename;
        const createData = req.body;
        db.Users.create(createData).then(()=>{res.redirect('/admin')}).catch(error=>{console.log(error)})
    }
}

module.exports = controllerAdmin;