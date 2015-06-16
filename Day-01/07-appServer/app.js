var _middlewares = [];

var app = function(req, res){
   function action(middlewares){
        if (!middlewares || middlewares.length === 0) return;
        var first = middlewares[0];
        var remaining = middlewares.slice(1);
        var next = function(){
            action(remaining);
        }
        first(req, res, next);
    }
    action(_middlewares);
};

app.use = function(middleware){
    _middlewares.push(middleware);
};

module.exports = app;
