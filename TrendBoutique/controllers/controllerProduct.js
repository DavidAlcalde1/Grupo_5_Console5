(req, res) => {
    res.render('products/list', { products: productsData });
}

module.exports = controllerProducts; 

