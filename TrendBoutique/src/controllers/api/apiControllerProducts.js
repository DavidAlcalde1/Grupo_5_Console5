const db = require("../../../database/models");
module.exports = {
    allProducts: (req, res) => {
        const todosProductos = db.Products.findAll()
            .then(products => {
                res
                    .json({
                        meta: {
                            count: products.length
                        },
                        data: products
                    })
            })
        const totales = todosProductos.length
        return JSON.stringify(totales) // Se actualizó
    }
}