const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, 'product-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage })


const controllerAdmin = require(path.resolve(__dirname, '..', 'controllers', 'controllerAdmin'));
const controllerDetail = require(path.resolve(__dirname, '..', 'controllers', 'controllerProducts'));



router.get('/admin', controllerAdmin.show);
router.get('/admin/detail/:id', controllerDetail.show);
router.get('/admin/edit/:id', controllerAdmin.edit)



module.exports = router;