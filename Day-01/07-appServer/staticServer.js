
var fs = require('fs');
var path = require('path');

var staticResourceExtns = ['.html','.jpg','.css','.js','.png','.ico','.txt'];
function isStaticResource(resourceName){
    var ext = path.extname(resourceName);
    return staticResourceExtns.indexOf(ext) !== -1;
}
module.exports = function(req, res){
    var resourceName = req.url.pathname;
    if (isStaticResource(resourceName)){
        var resourceRequested = path.join(__dirname, resourceName);
        if (fs.existsSync(resourceRequested)){
            var stream = fs.createReadStream(resourceRequested, {encoding : 'utf8'});
            stream.on('data', function(dataChunk){
                console.log('data event');
                res.write(dataChunk);
            });
            stream.on('end', function(){
                res.end();
            });
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
}
