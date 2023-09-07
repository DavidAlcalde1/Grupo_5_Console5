const express = require('express');
const path = require('path');
const router = express.Router();
const controllerHome = require('../controllers/controllerHome');



router.get('/', controllerHome.home);




module.exports = router;

