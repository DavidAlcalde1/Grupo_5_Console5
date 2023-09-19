const path = require('path');
const fs = require('fs');

let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')));
const controllerAdmin = {
    show : (req, res) =>{
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'admin'),{products});
    },
    
    edit : (req, res)=> {
        
        let userId = req.params.id;
        let productEdit = products.find(product => product.id == userId);
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), {productEdit});
    }
}

module.exports = controllerAdmin;