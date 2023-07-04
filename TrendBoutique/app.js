const express = require('express');
const path = require('path');

const app = express();

const router = express.Router();

app.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.use(router);
app.listen(3000, ()=> console.log('Servidor Corriendo'));