const useremail= ""
if(useremail){
    console.log("got user email ");
}else{
    console.log("email not found");
}

// falsy values
// false
// 0,-0
//BigInt(0n)
// ""
// null
// undefined
// NaN

// truthy values
//"0"
//"false"
//" "
//[]
//{}
//function(){}

if (useremail.length===0){
    console.log("Array is empty");
    
}
const emptyobj={}
if( Object.keys(emptyobj).length===0){
    console.log("obj is empty");
}

//false ==0 -> true
//false =="" -> true
//0=="" -> true

//false ===0 -> false
//false ==="" -> false
//0==="" -> false

//Nullish coalescing operator(??):null undefined
let val1;
val1=5??10
val2=null??10
//val2=undefined??10    
//val2=null??10??20
console.log(val1);
console.log(val2);

//terniary operator
// condition ? true : false
let age=17
let canvote= age>=18 ? "can vote":"cannot vote"
console.log(canvote);