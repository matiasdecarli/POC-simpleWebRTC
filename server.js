var express = require('express');
var app = express();
var port = 8888;//process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.listen(port);   
console.log('listening on ',port);