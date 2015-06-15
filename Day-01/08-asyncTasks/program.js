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

function f1(){
    console.log("f1 initiated");
    setTimeout(function(){
        console.log("f1 is invoked");
        f2()
    }, 2000)
}

function f2(){
    console.log("f2 initiated");
    setTimeout(function(){
        console.log("f2 is invoked");
    }, 2000)
}

function f3(){
    console.log("f3 initiated");
    setTimeout(function(){
        console.log("f3 is invoked");
    }, 2000)
}

var fns = [f1, f2, f3];

function run(fns){
    for(var i=0; i< fns.length ;i++){
        var fn = fns[i];
        fn();
    }
}
