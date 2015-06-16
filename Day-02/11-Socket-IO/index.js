var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var fs = require('fs');
var net = require('net');
var client = net.connect({port : 9000});
client.on('data', function(msg){
    var response = JSON.parse(msg);
    switch (response.type){
        case 'watching':
            io.emit('chat message','watching changes for file ' + response.filename);
            break;
        case 'changing':
            io.emit('chat message','file ' + response.filename + ' changed at ' + response.timeStamp);
            break;
        default :
            console.log('unknown message - ' +msg.toString());
            break;
    }
});
client.on('error', function(){
    console.log('error connection to file watcher process');
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
