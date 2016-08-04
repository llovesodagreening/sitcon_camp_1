var express = require('express');

var app = express();

app.listen (4444, function(err){

	console.log('Listening Port 8001');
});

app.use('/',express.static(__dirname));

app.get('/',function(req, res) {
	
	res.sendFile(__dirname + '/web/index.html' , 'UTF-8');

});

app.get('/notified.js',function(req, res) {
	
	res.sendFile(__dirname + '/web/notified.js' , 'UTF-8');

});

app.get('/other',function(req, res) {
	
	res.sendFile(__dirname + '/web/other.html' , 'UTF-8');

});

app.use(function(req, res){
	res.redirect('/');
});