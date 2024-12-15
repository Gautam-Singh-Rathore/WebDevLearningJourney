function hello(msg){
    console.log("Hello " + msg);
  }
  
  var thanks = function(msg){
    console.log("Thanks " + msg);
  }
  
  // hello("Nrupul");
  // thanks("Nrupul");
  
  function sum (n1 , n2 , cb, heCb){
    heCb("Doing");
    console.log(n1+n2);
    cb("Sum Complete");
  }
  
  sum(2,3,thanks,hello);