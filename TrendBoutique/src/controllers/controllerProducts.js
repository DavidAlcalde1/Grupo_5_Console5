const path = require('path');//Para homologar rutas en diferentes S.O.
const fs = require('fs');
const { Op } = require("sequelize");
let db = require('../../database/models');

let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')));
let productsOriginal = products

module.exports = {
    index: function (req,res){
        
       res.render(path.resolve(__dirname, '..', 'views', 'products', 'list'), { products });

    },

    productsCategory: function (req,res){
        /*
        let products = []
        productsOriginal.forEach(product => {
            console.log(product.category, req.params.category)
            if (product.category == req.params.category){
                products.push(product)
            }
            
        });
        */
        db.Products.findAll( {where: {
            idcategory: {
              [Op.eq]: req.params.category
            }
        }})
        .then(function (products) {
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'list'), { products });
        })
    },

    show: function (req,res){
        /*
        let miProducto;
        products.forEach(product => {
            if(product.id == req.params.id){
                miProducto = product;
            }
            
        });
        */
        db.Products.findOne({ where: { id: req.params.id } }).then(function(miProducto){
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'detail'), { miProducto });
        });
    },

    search: function (req,res) {
        const filter = req.query.search
        //console.log(filter);
        let result = []
        db.Products.findAll( {where: {
            name: {
              [Op.like]: `%${filter}%`
            }
          }})
        .then(function (products) {
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'list'), { products });
        })


    }

}