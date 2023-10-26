const express = require('express');
const router = express.Router();
const path = require('path');

const apiControllerUsers = require('../../controllers/api/apiControllerUsers');

router.get('/api/users', apiControllerUsers.allUsers);

module.exports = router