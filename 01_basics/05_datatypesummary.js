//primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol,BigInt

const score=100
const scorevalue=100.3

const isLoggedIn =false
const outsideTemp= null
let useremail;

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId);

//reference (non primitive)

//Array, objects, Functions

const heros=[ "a","b","c"];
let myobj={
    name:"suryansh",
    age: 22
}
const myfunction= function(){
    console.log("helloworld");
}

let x="alpha"
let y=x
y="gamma"

console.log(x);
console.log(y);

//stack mai original value ki copy di jati hai no change in org

let userone ={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userone

usertwo.email="abc@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

// heap mai original value ka pura reference hi diya jata hai
//  agr usme koi change hua to org value mai bhi reflerct hoga
