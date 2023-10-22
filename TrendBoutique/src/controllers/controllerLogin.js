const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const multer = require('multer');
const { log } = require('console');
let db = require('../../database/models');
// const bcrypt = require('bcrypt'); // Necesitarás instalar el paquete 'bcrypt' si aún no lo has hecho


// let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'users.json')));

const controllerLogin = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'));
        
        
    },
    
    getIn: async (req, res) => {
        // let errors = validationResult(req);
        // if (!errors.isEmpty()){
        //     console.log("ERRORS",errors)
        //     res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'), {errors:errors.mapped(), old:req.body});
        // }
        try {
            const { email, password } = req.body;
            console.log("email", email)
            // Validación de entrada
            if (!email || !password) {
                return res.status(400).json({ message: 'Se requieren correo electrónico y contraseña.' });
            }
            
            // Buscar al usuario en la base de datos por correo electrónico
            const user = await db.Users.findOne({ where: { email } });
            
            if (!user) {
                return res.status(401).json({ message: 'Correo electrónico incorrecto.' });
            }
            
            // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Contraseña incorrecta.' });
            }
            
            //     const errors = validationResult(req);
            // if (errors.isEmpty()) {
                // const loggedUser = users.find(user=>user.email == req.body.email);
            const loggedUser = user
            delete loggedUser.password
            req.session.user = loggedUser
            // let  logUser = users.find(user => user.email == req.body.email)
            //     return res.redirect('/');
            // } else {
                //     return res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'),{errors:errors.mapped() , old:req.body});
                // }
                
                // Si la autenticación es exitosa, puedes iniciar una sesión o generar un token JWT según tu sistema de autenticación.
                // Aquí asumimos que se ha autenticado correctamente y redirigimos al usuario.
                res.redirect('/');
            } catch (error) {
                console.error("ERROR DEL CATCH", error);
                // res.status(500).json({ message: 'Error interno del servidor.' });
                res.render(path.resolve(__dirname, '..', 'views', 'users', 'login'), {errors:errors.mapped(), old:req.body});
                
            }
    },
    
    // getIn: async (req, res) => {
//     try {
//         let { email, password } = req.body;
//         password = bcrypt.hashSync(password,10);
//         // Validación de entrada
//         if (!email || !password) {
//             return res.status(400).json({ message: 'Se requieren correo electrónico y contraseña.' });
//         }

//         // Buscar al usuario en la base de datos por correo electrónico
//         const user = await db.Users.findOne({ where: { email } });

//         if (!user) {
//             return res.status(401).json({ message: 'Correo electrónico incorrecto.' });
//         }

//         // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
//         const passwordMatch = await bcrypt.compareSync(password, user.password);
//         console.log(password)
//         console.log(user.password)
//         if (!passwordMatch) {
//             return res.status(401).json({ message: 'Contraseña incorrecta.' });
//         }

//         // Si la autenticación es exitosa, puedes iniciar una sesión o generar un token JWT según tu sistema de autenticación.
//         // Aquí asumimos que se ha autenticado correctamente y redirigimos al usuario.
//         res.redirect('/');
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error interno del servidor.' });
//     }
// },

    // getIn: (req, res) => {
    //     // console.log("Este es el params de Guille", req.body)
    //     const useremail = req.body.email;
    //     const userpassword = req.body.password;
    //     // db.Users.findOne({ where: { email: useremail, password: userpassword } }).then(function () {
    //     //     res.redirect('/');
    //     // }).catch(error=>{console.log(error)})
    //     db.Users.findOne({ where: { email: useremail, password: userpassword } }).then(()=>{res.redirect('/')}).catch(error=>{console.log(error)})

    // },
        
   

    register: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'registro'));
    },
    
    create: (req, res) => {
        
        req.body.image=req.file.filename
        req.body.password=bcrypt.hashSync(req.body.password,10)
        const createData= req.body
        
        // const createData = {
        //     email:req.body.email,
        //     password:bcrypt.hashSync(req.body.password,10)
        //     image:req.file.filename,
        //}

        db.Users.create(createData).then(()=>{res.redirect('/login')}).catch(error=>{console.log('cualquier texto', error)})
        // let errors = validationResult(req)
        // if(!errors.isEmpty()) {
        //     return res.render(path.resolve(__dirname, '..', 'views', 'users', 'registro'),{errors: errors.errors, old:req.body});
        // }
        // let lastRegister = users.pop();
        // users.push(lastRegister);

        // let newRegister = {
        //     id: parseInt(lastRegister.id) + 1,
        //     first_name: req.body.first_name,
        //     last_name: req.body.last_name,
        //     email: req.body.email,
        //     gender: req.body.genero,
        //     telefono: req.body.telefono,
        //     password: bcrypt.hashSync(req.body.password, 10),
        //     role: req.body.role,
        //     country: req.body.country,
        //     image: req.file.filename
        // }
        // users.push(newRegister);

        // let registroActualizado = JSON.stringify(users, null, 2);
        // fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'users.json'), registroActualizado);

        //res.redirect('/login');
    },
    
    logout: (req, res) => {
        req.session.destroy ()
        res.cookie('email', null, {maxAge:-1})
        res.redirect('/')
    }

};



module.exports = controllerLogin