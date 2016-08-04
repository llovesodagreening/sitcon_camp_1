var express = require('express');

var app = express();

app.listen (1234, function(err){

	console.log('Listening Port 1234');
});

app.use('/',express.static(__dirname));

app.get('/',function(req, res) {
	
	res.sendFile(__dirname + '/web/index.html' , 'UTF-8');

});

app.get('/notified.js',function(req, res) {
	
	res.sendFile(__dirname + '/web/notified.js' , 'UTF-8');

});
app.get('/return.js',function(req, res) {
	
	res.sendFile(__dirname + '/web/return.js' , 'UTF-8');

});
app.get('/location.js',function(req, res) {
	
	res.sendFile(__dirname + '/web/location.js' , 'UTF-8');

});

app.use(function(req, res){
	res.redirect('/');
});