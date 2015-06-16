var _middlewares = [];

var app = function(req, res){
   function action(req, res, middlewares){
        var first = middlewares[0];
        var remaining = middlewares.splice(1);
        var next = function(){
            action(req, res, remaining);
        }
        if (typeof first === "function")
            first(req, res, next);
    }
    action(req, res, _middlewares);
};

app.use = function(middleware){
    _middlewares.push(middleware);
};

module.exports = app;
