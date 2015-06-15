var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');
var calculator = require('./calculator');

/*
1. dataParser (url query)
2. staticServer (.html)
3. calculatorRoute ('/calculator')
4. notFoundAction
*/

var staticResourceExtns = ['.html','.jpg','.css','.js','.png','.ico','.txt'];
function isStaticResource(resourceName){
    var ext = path.extname(resourceName);
    return staticResourceExtns.indexOf(ext) !== -1;
}
var server = http.createServer(function(req, res){
    req.url = req.url === '/' ? '/index.html' : req.url;
    req.url = url.parse(req.url);
    req.query = qs.parse(req.url.query);
    var resourceName = req.url.pathname;
    if (isStaticResource(resourceName)){
        var resourceRequested = path.join(__dirname, resourceName);
        if (fs.existsSync(resourceRequested)){
            var stream = fs.createReadStream(resourceRequested, {encoding : 'utf8'});
            stream.pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else if (resourceName === "/calculator" && req.method === 'GET'){
        var operation = req.query.operation,
            number1 = parseInt(req.query.number1,10),
            number2 = parseInt(req.query.number2,10);
        var result = calculator[operation](number1, number2);
        res.write(result.toString());
        res.end();
    } else if (resourceName === "/calculator" && req.method === 'POST'){
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

    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log('server listening on port 8080');
