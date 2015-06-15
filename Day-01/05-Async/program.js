function add(x,y){
    if (!x || !y){
        throw new Error('invalid arguments');
    }
    return x + y;
}

function usingAdd(x,y){
    try{
        var result = add(x,y);
        console.log('result = ', result);
    } catch (e){
        console.log('error occured ', e);
    }
}

function addAsync(x,y, onResult){
    setTimeout(function(){
        if (!x || !y){
            var e =  new Error('invalid arguments');
            return onResult(e, null);
        }
        var result = x +y;
        onResult(null, result);
    },3000);
}

function usingAddAsync(x,y){
    addAsync(x,y, function(err, result){
        if (err){
            console.log('error occured ', err);
        } else {
            console.log('result = ', result);
        }
    });

}
