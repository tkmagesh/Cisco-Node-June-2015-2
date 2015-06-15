/*var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    }
}*/

function getCalculator(){
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
    return calculator;
}
module.exports = getCalculator;
