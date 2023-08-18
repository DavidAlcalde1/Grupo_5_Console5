const controllerProducts = {
    listar : (req, res) => {
        res.send('Lista de productos Dvaico')
    },
    detalle: (req, res) => {
        res.render('products/detail')
    },
    crear: (req, res) => {
        res.render('products/create')
    },
    edit: (req,res) => {
        res.render('products/:id/edit')
    },
    delete: (req,res) => {
        res.render('products/delete')
    },

}

    module.exports = controllerProducts; 

