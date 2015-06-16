var calculator = require('./calculator');
var qs = require('querystring');

module.exports = function(req, res, next){
    var resourceName = req.url.pathname;
    if (resourceName === "/calculator") {
        var operation = req.field('operation'),
            number1 = parseInt(req.field('number1'),10),
            number2 = parseInt(req.field('number2'),10);
        var result = calculator[operation](number1, number2);
        res.write(result.toString());
        res.end();
    }  else {
        next();
    }
};
