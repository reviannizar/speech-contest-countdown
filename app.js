var srv={port:3000};
var path = require('path');
var express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {	
	res.redirect('index.html/');
});

io.sockets.on('connection', function(socket){
	socket.on('start', function(msg){
		io.sockets.emit('start', msg);
	});
	socket.on('stop', function(msg){
		io.sockets.emit('stop', msg);
	});
});

http.listen(srv.port, function(){
	console.log('listening on *:'+srv.port);
});
