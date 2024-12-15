function sum(a,b,callback){
    var out=a+b;
    callback(out);
}

sum(2,3,resultDisplay);

function resultDisplay(result){
    console.log("Your output is "+ result);
}