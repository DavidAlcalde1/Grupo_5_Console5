const express = require('express');
const path = require('path');
const router = express.Router();

const productsData = require('../public/data/products.json'); // Asegúrate de tener acceso a los datos de productos
const controllerProducts = require('../controllers/controllerProduct');

/* router,get('/', controllerProducts.listar);
router,get('/', controllerProducts.detalle);
router,get('/', controllerProducts.crear); */


router.get('/list', (req, res) => {
    res.render('products/list', { products: productsData });
});

router.get('/products/create', (req, res) => {
    res.render('products/create');
});

router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    // Encuentra el producto correspondiente en productsData usando productId
    const product = productsData.find(product => product.id === productId);
    res.render('products/detail', { product });
});

router.post('/products', (req, res) => {
    const newProduct = req.body; // Los datos del nuevo producto enviados desde el formulario
    // Agregar lógica para agregar el nuevo producto a productsData
    // Guardar productsData en tu fuente de datos JSON
    res.redirect('/products'); // Redirige de vuelta a la lista de productos
});

router.get('/products/:id/edit', (req, res) => {
    const productId = req.params.id;
    // Encuentra el producto correspondiente en productsData usando productId
    const product = productsData.find(product => product.id === productId);
    res.render('products/edit', { product });
});

router.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProductData = req.body; // Los datos editados del producto
    // Encuentra y actualiza el producto correspondiente en productsData usando productId
    // Guardar productsData en tu fuente de datos JSON
    res.redirect(`/products/${productId}`); // Redirige de vuelta al detalle del producto
});

router.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    // Encuentra y elimina el producto correspondiente en productsData usando productId
    // Guardar productsData en tu fuente de datos JSON
    res.redirect('/products'); // Redirige de vuelta a la lista de productos
});


module.exports = router;