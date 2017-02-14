// requires
var express = require('express');
var app = express();

// middleware
app.use('/', express.static(__dirname + '/client')); // redirect root
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); //

// port
app.listen(3000);
