var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('/html/index.html', {root: './public'});
});

var port = 8085;
app.listen(port, function (){
    console.log('Server running on port ' + port);
});