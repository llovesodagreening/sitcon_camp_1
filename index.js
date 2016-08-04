var express = require('express');

var app = express();

app.listen (8001, function(err){

	console.log('Listening Port 8001');
});


app.get('/',function(req, res) {
	
	res.sendFile(__dirname + '/web/index.html' , 'UTF-8');

});

app.use(function(req, res){
	res.write("error");
	res.end();
});