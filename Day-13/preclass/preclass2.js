var nums = [1,2,3,4,5];

nums.forEach(function(el){
  console.log(el*2);
});

//**************//
function hello(msg){
  console.log("Hello " + msg);
}
var names = ["A","B","C","D","E"];
names.forEach(hello);