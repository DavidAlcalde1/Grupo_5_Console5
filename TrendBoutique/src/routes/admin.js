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

const controllerAdmindb = require(path.resolve(__dirname, '..', 'controllers', 'controllerAdmindb'));

router.get('/admin', controllerAdmindb.show);
router.get('/products/detail/:id', controllerAdmindb.view);
router.get('/admin/edit/:id', controllerAdmindb.edit);
router.post('/admin/edit/:id', upload.single('image'), controllerAdmindb.update)
router.get('/admin/delete/:id', controllerAdmindb.delete);
router.get('/admin/create', controllerAdmindb.create);
router.post('/admin/create', upload.single('image'), controllerAdmindb.save);
router.get('/products', controllerAdmindb.index);

router.get('/products/detail/:id', controllerAdmindb.show);

module.exports = router;