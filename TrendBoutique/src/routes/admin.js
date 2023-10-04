const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })

const controllerAdmin = require(path.resolve(__dirname, '..', 'controllers', 'controllerAdmin')); //'../controllers/controllerAdmin'
const controllerAdmindb = require(path.resolve(__dirname, '..', 'controllers', 'controllerAdmindb'));
const controllerDetail = require(path.resolve(__dirname, '..', 'controllers', 'controllerProducts'));




router.get('/admin', controllerAdmindb.show);
router.get('/admin/detail/:id', controllerDetail.show);
router.get('/admin/edit/:id', controllerAdmin.edit);
router.post('/admin/edit/:id', upload.single('image'), controllerAdmin.update)
router.get('/admin/delete/:id', controllerAdmin.delete);
router.get('/admin/create', controllerAdmin.create);
router.post('/admin/create', upload.single('image'), controllerAdmin.save);


module.exports = router;