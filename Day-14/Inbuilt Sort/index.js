let arr = [1,2,3,4,5,7,8,9,6,3,11,10,13,12];
arr.sort(ascending);
function ascending(a,b){
    return a-b;
}
function descending(a,b){
    return b-a;
}
console.log(arr);

function mod(a,b){
    return a%3-b;
}


let names = ["Chandra","Sourav","Aman","Varun","Ankush"];
names.sort();
console.log(names);

// 1. It is a inplace sorting method
// 2. It dont change the order of the elements

let objArr = [
    {
        name:"Aman",
        sallary:10000,
    },
    {
        name:"Chandra",
        sallary:20000,
    },
    {
        name:"Varun",
        sallary:9000,
    },
    {
        name:"Ankush",
        sallary:15000,
    }
];

// objArr.sort(function(a,b){
//     return a.sallary-b.sallary;
// });

objArr.sort(function(a,b){
    if(a.name>b.name){return 1}
    else if(a.name<b.name){return -1}
    else return 0;
});

console.log(objArr);