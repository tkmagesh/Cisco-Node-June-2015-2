function Calculator(){
    var result = 0;
    this.add = function(n){
        result += n;
    };
    this.subtract = function(n){
        result -= n;
    };
    this.multiply = function(n){
        result *= n;
    };
    this.divide = function(n){
        result /= n;
    };
    this.getResult = function(){
        return result;
    };
}
module.exports = Calculator;
