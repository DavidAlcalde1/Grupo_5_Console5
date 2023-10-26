const db = require("../../../database/models");
module.exports = {
    allProducts: (req, res) => {
        db.Products.findAll()
            .then(products => {
                res
                    .json({
                        meta: {
                            count: products.length
                        },
                        data: products
                    })
            })
    }
}
