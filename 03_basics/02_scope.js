//var a=300
/*let a=300
if(true){
    let a=20
    const b=30
    console.log("Inner: ",a);
}
console.log(a);
*/
function one(){
    const username="suryansh"

    function two(){
        const website= "youtube"
        console.log(username); 
    }
    //console.log(website);

    two()
    
}
one()

if(true){
    const username= "surya"
    if(username==="surya"){
        const website= " youtube"
        console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);


// we can declare function by this method
// use it before initialisation
function addOne(num) {
    return num+1
}
console.log(addOne(5));


const addTwo= function(num){
    return num+2
}
console.log(addTwo(6));
