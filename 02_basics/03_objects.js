//singleton
//Object.create
//object literals
const mySym=Symbol("key1")

const jsUser={
    name:"Suryansh",
    "full name":"Suryansh Tyagi",
    [mySym]:"myKey1",
    age:21,
    location:"Ghaziabad",
    email:"suryansh00@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
/*console.log(jsUser.email);
console.log(jsUser["email"]); 
console.log(jsUser["full name"]);
console.log(typeof mySym);

jsUser.email="abc@gmail.com"
Object.freeze(jsUser);
jsUser.email="xyz@gmail.com"
console.log(jsUser);
*/

jsUser.greetings= function(){
    console.log("Hello js user");
}
jsUser.greetings2=function(){
    console.log(`Hello js user, ${this["full name"]}`);
    
}
jsUser.greetings();
jsUser.greetings2();

// this tutorial told us about declaring objects 
// and simple functions in js 
// and how to define symbols in js 