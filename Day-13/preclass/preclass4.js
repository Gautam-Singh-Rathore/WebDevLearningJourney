var isOdd = function(el){
    return el%2==1;
  }
  
  var nums = [1,2,3,4,5];
  var oddNums = nums.filter(isOdd);
  console.log(oddNums);
  