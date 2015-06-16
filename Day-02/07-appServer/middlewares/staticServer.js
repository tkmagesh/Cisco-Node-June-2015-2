
var fs = require('fs');
var path = require('path');

var staticResourceExtns = ['.html','.jpg','.css','.js','.png','.ico','.txt'];
function isStaticResource(resourceName){
    var ext = path.extname(resourceName);
    return staticResourceExtns.indexOf(ext) !== -1;
}
module.exports = function (defaultPath){
    return function(req, res, next){
        var resourceName = req.url.pathname;
        if (isStaticResource(resourceName)){
            var resourceRequested = path.join(defaultPath, resourceName);
            if (fs.existsSync(resourceRequested)){
                var stream = fs.createReadStream(resourceRequested, {encoding : 'utf8'});
                stream.pipe(res);
            } else {
                res.statusCode = 404;
                res.end();
            }
        } else {
            next();
        }
    }
}
