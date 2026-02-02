// if 
/*const isUserLoggedIn= true 
const temperature=55
if(temperature<50){
    console.log("less than 50");
}else{
    console.log("temperature is greater than 50");
}
*/
// comparision operators 
// <,>,<=,>=,==,!=,===

/*const score= 200
if(score>100){
    let power="fly"
    console.log(`user power:${power}`);
    
}
console.log(`user power:${power}`);*/

//const balance=1000

//if(balance>500)console.log("test");
/*const balance=1000
if(balance<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("balance is less than 1200");
}*/

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromemail=true

// if user is logged in and has debit card allow user to buy course
//&& ->all values must be true
if (userLoggedIn && debitCard ){
    console.log("Allow user to buy course");
}
// || -> at least one value must be true
 if(loggedInFromGoogle || loggedInFromemail){
    console.log("user logged in from email or google");
}