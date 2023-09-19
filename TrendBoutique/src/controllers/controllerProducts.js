const path = require('path');//Para homologar rutas en diferentes S.O.
const fs = require('fs');

let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')));


module.exports = {
    index: function (req,res){
        
       res.render(path.resolve(__dirname, '..', 'views', 'products', 'list'), { products });

    },

    

    show: function (req,res){
        let miProducto
        products.forEach(product => {
            if(product.id == req.params.id){
                miProducto = product;
            }
            
        });
        res.render(path.resolve(__dirname, '..', 'views', 'products', 'detail'), { miProducto});
    }

}