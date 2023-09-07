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
          image : req.file.filename
        };
      
      productos.push(producto);
      let newList = JSON.stringify(productos, null, 4); //convertir de Objeto literal a texto
      fs.writeFileSync(path.resolve(__dirname,'../public/data/products.json'), newList);
      
      res.redirect('/list');
    },
    edit: (req,res) => {
      const miId = parseInt(req.params.id);
      let producto = products.find((item) => {
        return item.id === miId;
      });
      res.render("products/edit", { producto });
    },

    update: (req,res)=>{
      let productos = fs.readFileSync(path.resolve(__dirname,'../public/data/products.json'));
      const id = parseInt(req.params.id);
      // let producto = products.find((item) => {
      //   return item.id === id;
      // });
      let producto;
      let productUpdate = productos.map(producto => {
        if(producto.id === id){
          return({
            id:id,
            name:req.body.name,
            description : req.body.descripcion,
            price: req.body.price,
            // image: req.file.filename })
          });
        }
        return producto;
      })
      console.log(producto);
      let newList = JSON.stringify(productUpdate, null, 4); //convertir de Objeto literal a texto
      fs.writeFileSync(path.resolve(__dirname,'../public/data/products.json'), newList);

      res.send('EDITADO')
    },

    delete: (req,res) => {
        res.render('products/delete')
    },

}

    module.exports = controllerProducts; 

