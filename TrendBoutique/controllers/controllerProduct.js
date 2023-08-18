const controllerProducts = {
    listar : (req, res) => {
        res.send('Lista de productos Dvaico')
    },
    detalle: (req, res) => {
        res.send('Detalle del producto')
    },
    crear: (req, res) => {
        res.send('Producto creado')
    },
}

    module.exports = controllerProducts; 

