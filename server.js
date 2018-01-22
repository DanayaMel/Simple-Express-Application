var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('cookie-session');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'pug');

app.get('/', function(req, res){
		console.log("Hi!");
		var name = "";
		res.render('file');
});

app.post('/', urlencodedParser,function(req, res){
	console.log('no!');
	res.render('file', {name: req.body.name});
});

app.listen(8080);
console.log('8080 is listening');
