var result = 0;
var calculator = {
    add : function(n){
        result += n;
    },
    subtract : function(n){
        result -= n;
    },
    multiply : function(n){
        result *= n;
    },
    divide : function(n){
        result /= n;
    },
    getResult : function(){
        return result;
    }
};
module.exports = calculator;
