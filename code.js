const express = require('express');
let routesCode = require('./routes/code');
let routesUsers = require('./routes/user');

let app = express();

app.use(routesCode);
app.use('/users', routesUsers);

app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});