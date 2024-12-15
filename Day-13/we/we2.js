// Given an array of numbers find the sum of odd elements Samplr Input - [1,2,3,4] Sampl eoutput-4

var arr = [1,2,3,4];
var out = arr.filter((el)=>{
    return el%2!=0;
}).reduce((acc , el)=>{
    return acc+el
});

console.log(out);