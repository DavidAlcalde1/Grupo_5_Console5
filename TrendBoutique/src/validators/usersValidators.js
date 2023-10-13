const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');
const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];

const validateCreate = [
    check('first_name')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 2 }),
    check('email')
        .exists()
        .withMessage('El email es obligatorio y debe tener un formato válido.')
        .isEmail(),
        (req, res, next) => {
            validateResult(req, res, next)
        },
    check('password')
        .exists()
        .isLength({ min: 8 })
        .withMessage('La contraseña es obligatoria y debe tener al menos 8 caracteres.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/)
        .withMessage('La contraseña debe incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.'),
    check('image')
    .custom((value, { req }) => {
        if (!value) {
            // El campo de imagen está vacío, lo cual es aceptable
            return true;
        }

        // Obtener la extensión del archivo
        const fileExtension = getFileExtension(value);

        // Verificar si la extensión es válida
        if (imageExtensions.includes(fileExtension.toLowerCase())) {
            return true;
        }
        throw new Error('El archivo de imagen no es válido.');
    }),
];

function getFileExtension(filename) {
return filename.split('.').pop();
}

module.exports = { validateCreate };
