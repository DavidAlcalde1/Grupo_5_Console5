const express = require('express');
const path = require('path');
const methodOverride = require("method-override");

const rutaHome = require('./routes/home');
const rutaCarrito = require('./routes/carrito');
const rutaDetalle = require('./routes/detalle');
const rutaLogin = require('./routes/login');
const rutaRegistro = require('./routes/registro');
const rutaProducts = require('./routes/products');
const adminRoutes = require('./routes/admin');

const app = express();
    
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(adminRoutes);
// const router = express.Router();


app.set('view engine', 'ejs');
app.use('/', rutaHome);
app.use('/', rutaCarrito);
app.use('/', rutaDetalle);
app.use('/', rutaLogin);
app.use('/', rutaRegistro);
app.use('/products', rutaProducts);


// app.use(router);
// app.use(express.static('public'));


module.exports = {
    index: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname,'/data/products.json')));
        res.render(path.resolve(__dirname,'../views/admin/administrar'),{products});
    },
    create: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/admin/create'));
    },
    save : (req,res)=>{
        //Leer JSON - y lo parseamos 

        //Construir mi nuevo moto

        //Validar si el nuevo registro exise o no en mi JSON

        //Enviar mensaje al usuario por si existe el registro

        //Debemos determinar cual es el último registro y luego e incrememtamos 1

        //El nuevo ID se lo asigmamos al nuevo elemento

        //Agregar el nuevo elemento al archivo y recordar que debemos convertir a stringify (fswriter)

        //return res.redirect('/administrar');
    }

}


app.listen(3000, ()=> console.log('Servidor Corriendo'));

