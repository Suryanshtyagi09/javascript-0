//basic function to add two numbers

/*function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,4)
addTwoNumbers(3,"4")
addTwoNumbers(3,null)
addTwoNumbers(3,"a")*/

/*function addTwoNumbers(number1,number2){

    //let result=number1+number2      //method 1
    //return result
    //console.log(number1 + number2); 
    return number1 + number2          //method2
}
const result=addTwoNumbers(3,5)

console.log("Result: ",result);*/

function loginusermessage(username){
    if(!username/*===undefined*/){        // can also use !username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginusermessage("suryansh"));

//console.log(loginusermessage())
// when value is not passed inside the function undefined is returned

function calculateCArtprice(val1,val2,...num1){
    return num1
}
console.log(calculateCArtprice(200,400,500,2000))

const user={
    username:"surya",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({
    username:"golu",
    price: 399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

