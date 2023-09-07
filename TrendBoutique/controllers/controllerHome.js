const fs = require('fs');
const path = require('path');

const controllerHome = {
    home : (req, res)=> {
        res.render('home')
    }

}



module.exports = controllerHome;