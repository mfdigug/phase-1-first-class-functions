function receivesAFunction(callback){
return callback()
}

function callback() {
    console.log('You smell')
}

function returnsANamedFunction(){
    function basketball() {
        console.log('bounces a ball');
    }
  return basketball;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('ew')
    }
}