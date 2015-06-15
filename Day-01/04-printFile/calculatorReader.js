var fs = require('fs'),
    calculator = require('./calculator');

fs.readFile('data.txt', {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log('error occurred - ', err);
        return;
    }
    var lines = fileContents.split('\n');
    lines.forEach(function (line){
        var fields = line.split(',');
        var operation = fields[0];
        var data = parseInt(fields[1],10);
        calculator[operation](data);
    });
    console.log("result = ", calculator.getResult());
});
