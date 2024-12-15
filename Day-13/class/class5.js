var nums = [1,2,3,4,5];

nums.forEach((el)=>{
    console.log(el*10);
});

var out = nums.map((el)=>{
    return el*10;
});

console.log(out);