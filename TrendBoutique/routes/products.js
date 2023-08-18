const express = require('express');
const path = require('path');
const router = express.Router();

const productsData = require('../public/data/products.json'); // Asegúrate de tener acceso a los datos de productos
const controllerProducts = require('../controllers/controllerProduct');

// router,get('/', controllerProducts.listar);
// router,get('/', controllerProducts.detalle);
// router,get('/', controllerProducts.crear);


router.get('/list', controllerProducts.listar);

router.get('/products/create', controllerProducts.crear);

router.get('/products/detail', controllerProducts.detalle);

router.get('/products/:id/edit', controllerProducts.edit);

router.get('/products/delete', controllerProducts.delete);

// router.post('/products', (req, res) => {
//     const newProduct = req.body; // Los datos del nuevo producto enviados desde el formulario
//     // Agregar lógica para agregar el nuevo producto a productsData
//     // Guardar productsData en tu fuente de datos JSON
//     res.redirect('/products'); // Redirige de vuelta a la lista de productos
// });

// router.put('/products/:id', (req, res) => {
//     const productId = req.params.id;
//     const updatedProductData = req.body; // Los datos editados del producto
//     // Encuentra y actualiza el producto correspondiente en productsData usando productId
//     // Guardar productsData en tu fuente de datos JSON
//     res.redirect(`/products/${productId}`); // Redirige de vuelta al detalle del producto
// });

// router.delete('/products/:id', (req, res) => {
//     const productId = req.params.id;
//     // Encuentra y elimina el producto correspondiente en productsData usando productId
//     // Guardar productsData en tu fuente de datos JSON
//     res.redirect('/products'); // Redirige de vuelta a la lista de productos
// });


module.exports = router;