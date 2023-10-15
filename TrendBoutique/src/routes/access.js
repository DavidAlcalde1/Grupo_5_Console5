const fs = require('fs');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
//let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'users.json')));
let db = require('../../database/models');


module.exports = (req, res, next) => {
    res.locals.user = false;
    console.log("req.locals", res.locals)
    console.log(req.cookies.email)
    if (req.session.user) {
        res.locals.user = req.session.user;
        return next();
    } else if (req.cookies.email) {
        // Consulta la base de datos para buscar un usuario por su correo electrónico
        const query = 'SELECT * FROM users WHERE email = ?';
        connection.query(query, [req.cookies.email], (err, results) => {
            if (err) {
                console.error('Error al buscar el usuario en la base de datos:', err);
                return next();
            }
            
            if (results.length > 0) {
                const user = results[0];
                req.session.user = user;
                res.locals.user = user;
            }
            
            return next();
        });
    } else {
        return next();
    }
};



// module.exports = (req,res,next) =>{
//     //Variable locals (super global - vive en las vistas )
//     console.log(res.locals)
//     res.locals.user = false;
//     if(req.session.user){
//         res.locals.user = req.session.user;
//         return next();
//     }else if(req.cookies.email){
//         let user = users.find(user => user.email == req.cookies.email)
//         req.session.user = user;
//         res.locals.user = user;
//         return next();
//     }else{
//         return next();
//     }
// }