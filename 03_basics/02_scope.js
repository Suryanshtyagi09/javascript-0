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

function addOne(num) {
    return num+1
    
}
addOne(5)

const addTwo= function(num){
    return num+2
}
addTwo(5)