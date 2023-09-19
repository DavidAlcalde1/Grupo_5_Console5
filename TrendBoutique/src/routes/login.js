const express = require('express');
const router = express.Router();
const path = require('path');

const controllerLogin = require(path.resolve(__dirname, '..', 'controllers', 'controllerLogin'))

router.get('/login', controllerLogin.show)

module.exports = router