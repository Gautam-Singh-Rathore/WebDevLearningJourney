var sum = function(ac , el){
    console.log("AC "+ ac);
    console.log("EL "+el)
    return ac+el;
  }
 var nums = [1,2,3,4,5];
 var total = nums.reduce(sum , 100);
 console.log(total);