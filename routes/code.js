let express = require('express');
let routes = express.Router();

routes.use('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá</h1>');

});

module.exports = routes;