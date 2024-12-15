// Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - {1,2,3,4,5,6} Sample Output - 243(27+126)

var arr = [1,2,3,4,5,6];

// chain filter and reduce
var out = arr.filter((el)=>{
    return el%3==0
}).reduce((acc , el)=>{
    return (el*el*el )+acc ;
},0);

console.log(out);