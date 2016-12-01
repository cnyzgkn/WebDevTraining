var express = require('express');
var path = require('path');
var ejs = require('ejs');
var app = express();

app.engine('.html', ejs.__express);
app.set('view engine', 'html');
//mount view resources into current folder
app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res) {
    console.log("index.html");
    //res.send('index.html');
    res.render('index');
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;
