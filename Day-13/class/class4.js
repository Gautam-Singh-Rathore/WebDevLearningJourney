// forEach ,  map , filter , reduce ---> arrays
var sweets = ["laddu" , "kova" , "gulabjamun" , "barfi"];

// for(var i = 0 ; i<sweets.length ; i++){
//     console.log(sweets[i]);
// }

// ***** FOR EACH -- for each will return undefined
sweets.forEach(function(element , index , array){
    console.log(element);
    console.log(index);
    console.log(array);
});


// ***** MAP -- map will return an array
var box = sweets.map((el)=>{
    console.log(el);
});

console.log(box);
