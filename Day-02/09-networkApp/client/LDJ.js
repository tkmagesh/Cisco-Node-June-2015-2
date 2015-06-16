var events = require('events');
var util = require('util');

var LDJ = function(stream){
    events.EventEmitter.call(this);
    var self = this;
    var buffer = '';
    stream.on('data', function(dataChunk){
       buffer += dataChunk;
       var separatorIndex = buffer.indexOf('\n');
       while(separatorIndex != -1){
           var msg = buffer.substr(0, separatorIndex);
           var msgObj = JSON.parse(msg);
           self.emit('message', msgObj);
           buffer = buffer.substr(separatorIndex+1);
           separatorIndex = buffer.indexOf('\n');
       }
    });
    stream.on('end', function() {
      self.emit('end');
    });
}

util.inherits(LDJ, events.EventEmitter);
module.exports = LDJ;