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