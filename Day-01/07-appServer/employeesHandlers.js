
module.exports = {
    list : function(req, res, next){
        res.write("All employees will be listed here");
        res.end();
        next();
    },
    save : function(req, res, next){
        res.write('new employee is saved');
        res.end();
        next();
    }
}


