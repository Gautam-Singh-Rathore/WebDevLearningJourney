// Filter
var nums = [1,6,7,8,9];

// filter is returning items which satisfy the condition

var out = nums.filter((el)=>{
    return el%2==0;
    // returning only true elements
});



console.log(out);