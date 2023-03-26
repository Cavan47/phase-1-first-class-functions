function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){

    return function helloWorld(){
        //todo
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('hello world');
    }
}
