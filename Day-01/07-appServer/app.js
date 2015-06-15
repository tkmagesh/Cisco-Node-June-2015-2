var _middlewares = [];

var app = function(req, res){
    for(var i=0; i<_middlewares.length; i++)
        _middlewares[i](req, res);
};

app.use = function(middleware){
    _middlewares.push(middleware);
};

module.exports = app;
