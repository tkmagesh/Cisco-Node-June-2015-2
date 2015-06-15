var http = require('http');
var fs = require('fs');
var path = require('path');

/*
if (req is for static resource ([.html, .js, .css, .jpg, .png, .ico]) - use path.extname
    /calculator?operation=add&number1=100&number2=200
    module - url - url.parse(req.url)
        - pathname = '/calculator'
        - query = 'operation=add&number1=100&number2=200'
    module = querystring - parse()
        {operation : 'add', number1 : '100', number2 : '200'}
*/

var server = http.createServer(function(req, res){
    var resourceRequested = path.join(__dirname, req.url);
    console.log(resourceRequested);
    if (fs.existsSync(resourceRequested)){
        var stream = fs.createReadStream(resourceRequested, {encoding : 'utf8'});
        stream.pipe(res);
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log('server listening on port 8080');
