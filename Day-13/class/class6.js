var mobiles = [
    {brand:"Samsung" , model:"S7562"} ,
    {brand:"Apple" , model:"iphone 15"} , 
    {brand:"One plus" , model:"7 pro"}
];

mobiles.forEach((el)=>{
    console.log(el.brand);
});

var out = mobiles.map((el)=>{
    return el.model
});
console.log(out);