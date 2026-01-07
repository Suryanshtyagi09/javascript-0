/*const user = {
    username: "suryansh",
    price: 900,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  
        console.log(this);
        
    }
}*/

/*user.welcomeMessage()
user.username ="arnav"
user.welcomeMessage()*/
//console.log(this);

//function ke andr this use nhi kr sakte undefined show hoga output mai
//function chai(){
//    let username ="surya"
//  console.log(this.username);
    
//}
//chai()

//const chai=() =>{
  //  let username= "naman"
    //console.log(this);
    
//}
//chai()

//explicit arrow function (use return statement)
//const addTwo=(num1,num2) =>{
//    return num1+num2
//}

//implicit arrow function
//const addTwo=(num1,num2)=> num1+num2

//object declaration with arrow function
const addTwo=(num1,num2)=>({username:"hitesh"})
console.log(addTwo(3,4));
