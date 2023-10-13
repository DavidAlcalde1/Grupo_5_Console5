const { check } = require('express-validator'); 
const { validateResult } = require('../helpers/validateHelper');

const validateCreate = [
    check('first_name')
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 2 }),
    check('email')
    .exists()
    .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    },
    check('password').isLength({ min: 4 }),
    check('image')
];

module.exports = { validateCreate };
