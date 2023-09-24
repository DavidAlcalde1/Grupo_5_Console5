const path = require('path');
const fs = require('fs');



let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')));
const controllerHome = {
    show:  (req,res) =>{
        let filtro = products.filter((reg) => {
            reg.category == req.params.category
        })

        res.render(path.resolve(__dirname, '..', 'views', 'products', 'home'),{filtro});
    }
};

module.exports = controllerHome;