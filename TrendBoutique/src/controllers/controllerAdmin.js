const path = require('path');
const fs = require('fs');

let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')));
const controllerAdmin = {
    show : (req, res) =>{
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'admin'),{products});
    },
    
    edit : (req, res)=> {
        console.log(req.body);
        
        let userId = req.params.id;
        let productEdit = products.find(product => product.id == userId);
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), {productEdit});
    },

    // update : (req, res)=> {
        
    //     console.log(req.body)

    //     req.body.id = req.params.id;
    //     let updateProducts = products.map(product => {

    //         if(product.id == req.body.id){
    //             product = req.body
    //         }
    //         return product;
    //     });
    //     console.log(updateProducts);
    // }
    update: (req, res) => {
        console.log(req.body)
        const productId = req.params.id;
        const updatedProduct = req.body;
    
        // Encuentra el índice del producto que deseas actualizar
        const productIndex = products.findIndex(product => product.id == productId);
    
        if (productIndex !== -1) {
            // Actualiza el producto en el arreglo con los nuevos valores
            products[productIndex] = updatedProduct;
            res.status(200).json({ message: 'Producto actualizado correctamente' });
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
      
    }
    
}

module.exports = controllerAdmin;