// Anonymous Function 
function eatBreakfast(item , time ,abc){
    abc();
    console.log("I am eating "+  item +" as my breakfast at " + time);
   
}
eatBreakfast("idly" , 9 , goAndBrush);
// hof - passing function inside a function

function goAndBrush(){
    console.log("First Brush four teeth");
}

// Order of execution -> Line 7 -> 2 -> 3 -> 10 -> 11 -> 4
//(functions are invisible until and unless they are invoked)