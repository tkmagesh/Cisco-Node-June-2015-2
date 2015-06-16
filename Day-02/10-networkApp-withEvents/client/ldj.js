var
    events = require('events'),
    util = require('util');

var LDJ = function(stream){
        events.EventEmitter.call(this);
        var self = this,
            buffer = '';
        stream.on('data', function(dataChunk){
            buffer += dataChunk;
            var boundary = buffer.indexOf('\n');
            while(boundary !== -1){
                var input = buffer.substr(0, boundary);
                buffer = buffer.substr(boundary + 1);
                self.emit('message', JSON.parse(input));
                boundary = buffer.indexOf('\n');
            }
        });
        stream.on('end', function(){
            self.emit('end');
        })
};
util.inherits(LDJ, events.EventEmitter);
module.exports = LDJ;
