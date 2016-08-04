
var fs = require('fs');
var express = require('express');

var app = express();

app.

app.get('/',function(req, res) {
	res.sendFile(__dirname + 'web/index.html' , 'UTF-8');
});

app.listen (8001, function(err){
	console.log('Listening Port 8001');
});