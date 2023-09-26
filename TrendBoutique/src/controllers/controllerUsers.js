const path = require('path');
const fs = require('fs');

let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'users.json')));

const controllerUsers = {
    show : (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'users', 'users'),{users});
    }
}