const products = require('../public/data/products.json');


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

