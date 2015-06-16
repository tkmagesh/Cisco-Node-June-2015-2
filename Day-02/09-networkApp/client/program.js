var net = require('net');

var LDJ = require('./LDJ');

var client = net.connect({port : 9000});
var ldjClient = new LDJ(client);
ldjClient.on('message', process);

function process(msgObj){
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

