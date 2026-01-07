// Immediately Invoked Function Expressions(IIFE)
//global scope ke pollution se bachne ke liye hum iife ka use krte hai
/*function chai(){
    console.log(`DB CONNECTED`);
    
}
chai()*/

//use kaise karenge neeche diya gya hai
(function chai(){
    console.log(`DB CONNECTED`);
})();
// ; use krte hai taki phle wale ka scope end kr paye 
//pure function ke block ko hi () mai capture kr 
(function xhai(name){
    console.log(`DB CONNECTED TWO ${name}`); 
})('Suryansh')