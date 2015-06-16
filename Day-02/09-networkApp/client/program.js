var net = require('net');

var client = net.connect({port : 9000}, function(){
    console.log('the connection to the server is established');
});

var buffer = '';
client.on('data', function(dataChunk){
   buffer += dataChunk;
   //console.log(buffer);
   var separatorIndex = buffer.indexOf('\n');
   //console.log(separatorIndex);
   while(separatorIndex != -1){
       var msg = buffer.substr(0, separatorIndex);
       console.log("msg = ", msg);
       //process(msg);
       buffer = buffer.substr(separatorIndex+1);
       console.log("buffer = ", buffer);
       separatorIndex = buffer.indexOf('\n');
   }
});

function process(msg){
     var msgObj = JSON.parse(msg);
    switch (msgObj.type){
        case 'watching' :
            console.log(msgObj.filename + ' is being watched');
            break;
        case 'changing' :
            console.log(msgObj.filename + ' changed at '+ msgObj.timestamp);
            break;
        default :
            console.log('unknown message ', msg);
    }
}
client.on('end', function() {
  console.log('disconnected from server');
});
