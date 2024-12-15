
var nums = [1,4,6,7,8];

// calculate sum
// var sum=0;
// for(var i=0 ; i<nums.length ; i++){
//     sum=sum+nums[i];
// }

// console.log(sum);

// forEach(function(element , index , array){});
// map(function(element , index , array){});
// filter(function(element , index , array){});
// reduce(function(accumulator , element , index , array){} , initial_value

// acc-accumulator
var out = nums.reduce((acc , el , i , arr)=>{
    return  acc+el;
    // the value will be stored in the first perameter which is the accumulator.
},10);
//we have not given the initial value of acc , so  it will take the first element in the array.

console.log(out);