const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');
const { generateKey } = require('crypto');
let db = require('../../database/models');

//let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'products.json')));
const controllerAdmin = {
    show: (req, res) => {
        db.Products.findAll()
        .then(function (products) {
            res.render(path.resolve(__dirname, '..', 'views', 'admin', 'admin'), { products });
            
        })
    },
    
    edit: (req, res) => {
        
        console.log(db)
        db.Products.query('select top1 from Products where id = ?', [req.body, req.params.id]);
        let userId = req.params.id;
        let productEdit = products.find(product => product.id == userId);
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'edit'), { productEdit });
    },

    update: (req, res) => {

        db = require('../../database/models');
        // Controlador para editar un producto por ID
        // exports.editProduct = (req, res) => {
            const productId = req.params.id;
            const updatedData = req.body; // Los nuevos datos del producto a editar

            // Realiza la actualización en la base de datos
            db.Products.query('UPDATE Products SET ? WHERE id = ?', [updatedData, productId], (err, result) => {
                if (err) {
                    console.error('Error al editar el producto: ' + err);
                    return res.status(500).send('Error en el servidor');
                }

                if (result.affectedRows === 0) {
                    return res.status(404).send('Producto no encontrado');
                }

                res.status(200).send('Producto editado exitosamente');
            });
        // };

        //     req.body.id = req.params.id;
        //    req.body.image = req.file ? req.file.filename : req.body.oldImage; 

        //     let updateProducts = products.map(product => {

        //         if(product.id == req.body.id){
        //             product = req.body
        //         }
        //         return product;
        //     });
        //     let registroActualizado = JSON.stringify(updateProducts, null, 2);
        //     // fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), updateProducts);
        //     fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), registroActualizado);

        res.redirect('/admin');
    },

    delete: (req, res) => {
        const deleteProducts = req.params.id;
        const finalList = products.filter(product => product.id != deleteProducts);
        let deleted = JSON.stringify(finalList, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), deleted);

        // res.render(path.resolve(__dirname, '..', 'views', 'admin', 'admin'),{products});

        res.status(200).redirect('/admin')



    },

    create: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'create'));
    },

    save: (req, res) => {
        let lastId = products.pop();
        products.push(lastId);

        let newProduct = {
            id: parseInt(lastId.id) + 1,
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            quantity: req.body.cantidad,
            category: req.body.categoria,
            size: req.body.talla,
            color: req.body.color,
            image: req.file.filename
        }
        products.push(newProduct);

        let registroActualizado = JSON.stringify(products, null, 2);
        // fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), updateProducts);
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), registroActualizado);

        res.redirect('/admin');

    }



}

module.exports = controllerAdmin;