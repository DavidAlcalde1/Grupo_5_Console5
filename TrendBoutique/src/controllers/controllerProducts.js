const path = require('path');//Para homologar rutas en diferentes S.O.
const fs = require('fs');
const { Op } = require("sequelize");
let db = require('../../database/models');
const gbUrl = '/products'

module.exports = {
    index: async function ( req,res){
       db.Products.findAll()
       .then(function (products) {
           res.render(path.resolve(__dirname, '..', 'views', 'products', 'list'), { products , gbUrl});
    })

    },

    productsCategory: function (req,res){
        db.Products.findAll( {where: {
            idcategory: {
              [Op.eq]: req.params.category
            }
        }})
        .then(function (products) {
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'list'), { products, gbUrl });
        })
    },

    show: function (req,res){
        db.Products.findOne({ where: { id: req.params.id } })
        .then(function(miProducto){
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'detail'), { miProducto});
        });
    },

    search: function (req,res) {
        const filter = req.query.search
        //console.log();
        db.Products.findAll( {where: {
            name: {
              [Op.like]: `%${filter}%`
            }
          }})
        .then(function (products) {
            res.render(path.resolve(__dirname, '..', 'views', 'products', 'list'), { products , gbUrl});
        })
    }
}