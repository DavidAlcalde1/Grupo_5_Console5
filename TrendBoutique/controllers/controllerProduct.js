const products = require('../public/data/products.json');
const fs = require('fs');
const path = require('path');


const controllerProducts = {
    listar: (req, res) => {
        if (typeof req.query.category === 'string') {
          let filtro = products.filter((item) => {
            return item.category === req.query.category
          })
          res.render('products/list', {products: filtro})
        } else res.render('products/list', {products})    
      },
    
    detalle: (req, res) => {
        if (typeof req.query.category === 'string') {
          let filtro = products.filter((item) => {
            return item.category === req.query.category
          })
          res.render('products/detail', {products: filtro})
        } else res.render('products/detail', {products})    
      },
    
    saveNew: (req, res) => {
      let productos = fs.readFileSync(path.resolve(__dirname,'../public/data/products.json'));// de JSON a objeto
      
      productos = JSON.parse(productos); //se convierte en objeo literal
      let arr = [];
      productos.forEach((x)=>{ // recorrer los productos y pushear sus ids
        arr.push(x.id);
        console.log('id = '+ x.id);
      });
      let maxId = Math.max(...arr);
      maxId = maxId + 1;
      console.log(maxId);
      let producto = {

          id : maxId,
          name : req.body.nombre,
          description : req.body.descripcion,
          price : req.body.precio,
          quantity : req.body.cantidad,
          size : req.body.talla,
          color : req.body.color,
          category : req.body.categoria,
          image : 'x'
        };
        console.log(producto);
      productos.push(producto);
      productos = JSON.stringify(productos, null, 4); //convertir de Objeto literal a texto
      fs.writeFileSync(path.resolve(__dirname,'../public/data/products.json'), productos);
      
      res.redirect('/list');
    },
    edit: (req,res) => {
        res.render('products/:id/edit')
    },
    delete: (req,res) => {
        res.render('products/delete')
    },

}

    module.exports = controllerProducts; 

