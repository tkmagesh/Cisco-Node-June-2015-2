var handlers = {

};

function router(req, res, next){
    var method = req.method,
        routeUrl = req.url.pathname;
    var handler = handlers[routeUrl][method];
    console.log(method, routeUrl, handler);

    if (handler){
        handler(req, res, next);
    } else {
        next();
    }
}

function register(method, routeUrl, handler){
    handlers[routeUrl] = handlers[routeUrl] || {};
    handlers[routeUrl][method] = handlers[routeUrl][method] || {};
    handlers[routeUrl][method] = handler;
}
router.get = function(routeUrl, handler){
    register("GET", routeUrl, handler);
};

router.post = function(routeUrl, handler){
    register("POST", routeUrl, handler);
};

router.getHandlers = function(){
    return handlers;
};

module.exports = router;
