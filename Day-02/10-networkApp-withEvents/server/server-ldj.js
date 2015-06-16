var fs = require('fs'),
    net = require('net'),
    fname = process.argv[2];

if (!fname) throw Error('invalid filename');
var filename = require('path').join(__dirname, fname);

var server = net.createServer(function(connection){
   console.log('a new connection is established');
   connection.write(JSON.stringify({
           type : 'watching',
           filename : filename
       }) + '\n');
    var watcher = fs.watchFile(filename, function(){
        var msg = {
            type : "change",
            filename : filename,
            timeStamp : new Date().toString()
        };
        var msgAsString = JSON.stringify(msg) + '\n';
        var response1 = msgAsString.substr(0,30) ;
           var response2 =  msgAsString.substr(30);
           connection.write(response1);
           setTimeout(function(){
               connection.write(response2);
           },2000);
       });

   connection.on('end', function(){
       fs.unwatchFile(filename, watcher);
   });
    connection.on('error', function(){
        console.log('unknown error occurred');
    });
});
server.listen(9090, function(){
    console.log('server listening on port 9090');
})
