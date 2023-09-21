const express = require('express');
const path = require('path');
const methodOverride = require("method-override");


const app = express();
    
//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));

//Debemos indicar cual es el productr de plantillas que estamos usando EJS
app.set('view engine', 'ejs');


//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
app.use(methodOverride('_method'));

//Creando variable para llamar a la ruta products
const productsRoute = require('./routes/products');
const homeRoute = require('./routes/home');
const loginRoute = require('./routes/login');
const adminRoute = require('./routes/admin');


//Le damos utilidad a la constante productsRoutes desde Express (app)
app.use(productsRoute);
app.use(homeRoute);
app.use(loginRoute);
app.use(adminRoute);
app.listen(3000, ()=> console.log('Servidor Corriendo'));

