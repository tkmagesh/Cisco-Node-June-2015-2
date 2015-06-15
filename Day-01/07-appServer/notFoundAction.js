module.exports = function(req, res){
    console.log('not found');
    res.statusCode = 404;
    res.end();
}
