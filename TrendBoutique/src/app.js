const express = require('express');
const path = require('path');
const methodOverride = require("method-override");
const access = require('./routes/access');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));

//Debemos indicar cual es el productr de plantillas que estamos usando EJS
app.set('view engine', 'ejs');

// Middleware para configurar res.locals con datos del usuario
// app.use((req, res, next) => {
//     // Aquí puedes realizar la lógica para obtener los datos del usuario
//     // por ejemplo, desde la sesión o la base de datos

//     // Ejemplo de un objeto de usuario (debes personalizar esto según tu lógica)
//     const user = {
//         username: 'nombre_de_usuario',
//         image: 'nombre_de_la_imagen.png',
//         // Otras propiedades del usuario
//     };

//     // Ahora, establece res.locals con el objeto del usuario
//     res.locals.user = user;

//     // Llama a next() para continuar con la solicitud
//     next();
// });


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
const multer = require('multer');


//Le damos utilidad a la constante productsRoutes desde Express (app)
app.use(cookieParser());
app.use(session({
    secret: 'topSecret', resave: false, saveUninitialized: true
}));
app.use(access);
app.use(productsRoute);
app.use(homeRoute);
app.use(loginRoute);
app.use(adminRoute);
app.listen(3000, () => console.log('Servidor Corriendo en puerto 3000'));

