let express = require('express');
let routes = express.Router();

routes.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[{
            name: 'biel',
            email: 'biel1313biel@gmail.com',
            id: 1
        }]
    });

});

routes.get('/admin', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{

        
            name:'123',
        }]
    });

});

module.exports = routes;