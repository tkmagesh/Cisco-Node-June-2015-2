var fs = require('fs');
var stream = fs.createReadStream('test.txt', {encoding : 'utf8'});
/*var readCount = 0;
stream.on('data', function(chunk){
    readCount++;
    console.log(chunk);
});
stream.on('end', function(){
    console.log('job done with readCount = ', readCount);
});*/
stream.pipe(process.stdout);
