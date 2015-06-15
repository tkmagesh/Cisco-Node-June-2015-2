var calculator = require('./calculator');

module.exports = function(req, res){
    var resourceName = req.url.pathname;
    if (resourceName === "/calculator" && req.method === 'GET'){
        var operation = req.query.operation,
            number1 = parseInt(req.query.number1,10),
            number2 = parseInt(req.query.number2,10);
        var result = calculator[operation](number1, number2);
        res.write(result.toString());
        res.end();
    } /*else if (resourceName === "/calculator" && req.method === 'POST'){
        var data = '';
        req.on('data', function(dataChunk){
            data += dataChunk;
        });
        req.on('end', function(){
            var reqObject = qs.parse(data);
            console.log(reqObject);
            var operation = reqObject.operation,
                number1 = parseInt(reqObject.number1,10),
                number2 = parseInt(reqObject.number2,10);
            var result = calculator[operation](number1, number2);
            res.write(result.toString());
            res.end();
        })
    } */
};
