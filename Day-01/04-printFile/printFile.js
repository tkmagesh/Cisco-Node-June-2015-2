var fs = require('fs');

//var fileContents = fs.readFileSync('test.txt', {encoding : 'utf8'});
fs.readFile('test.txt', {encoding : 'utf8'}, function(err, fileContents){
    console.log(fileContents);
});
console.log('file reading completed');
