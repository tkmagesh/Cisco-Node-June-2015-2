var net = require('net');
var fs = require('fs');

if (process.argv.length < 3){
    console.log("invalid arguments");
    return;
}
var filename = require('path').join(__dirname, process.argv[2]);
var server = net.createServer(function(connection){
       var msgObj = {
           filename : filename,
           type : 'watching'
       };
       var msg = JSON.stringify(msgObj);
       connection.write(msg);
    var watcher = fs.watchFile(filename, function(){
       var msgObj = {
           filename : filename,
           type : 'changing',
           timestamp : new Date().toString()
       };
       var msg = JSON.stringify(msgObj);
        connection.write(msg);
    });
    connection.on('close', function(){
        //watcher.close();
    });
    connection.on('error', function(){
        console.log('connection error');
    });
});
server.listen(9000);
console.log("Server listening on port 9000");
