/* Sync */

function f1(){
  console.log("f1 is invoked");
}
function f2(){
  console.log("f2 is invoked");
}
function f3(){
  console.log("f3 is invoked");
}

var fns = [f1, f2, f3];

function run(fns){
    for(var i=0; i< fns.length ;i++){
        var fn = fns[i];
        fn();
    }
}

/* Async */

function f1(next){
    console.log("f1 initiated");
    setTimeout(function(){
        console.log("f1 is invoked");
        next()
    }, 2000)
}

function f2(next){
    console.log("f2 initiated");
    setTimeout(function(){
        console.log("f2 is invoked");
        next();
    }, 2000)
}

function f3(next){
    console.log("f3 initiated");
    setTimeout(function(){
        console.log("f3 is invoked");
        next();
    }, 2000)
}

var fns = [f1, f2, f3];

function run(fns){
    function action(fns){
        if (!fns || fns.length === 0) return;
        var first = fns[0];
        var remaining = fns.splice(1);
        var next = function(){
            action(remaining);
        }
        first(next);
    }
    action(fns);
}
