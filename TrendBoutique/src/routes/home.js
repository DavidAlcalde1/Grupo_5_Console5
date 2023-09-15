const express = require('express');
const router = express.Router();
const path = require('path');

//D:\DIGITALHOUSE\PROYECTO_CONSOLE5\Trend_Boutique\Grupo_5_Console5\TrendBoutique\src\ = __dirname
//".." = Ir al directorio anterior
// controllers = primer directorio
// \controllerProducts.js = el controlador
const controllerHome = require(path.resolve(__dirname,'..', 'controllers', 'controllerHome'));
router.get('/', controllerHome.show);

module.exports = router;

//Error: Failed to lookup view "D:\DIGITALHOUSE\PROYECTO_CONSOLE5\Trend_Boutique\Grupo_5_Console5\TrendBoutique\src\controllers\views\products\home" in views directory "D:\DIGITALHOUSE\PROYECTO_CONSOLE5\Trend_Boutique\Grupo_5_Console5\TrendBoutique\views"