const name= "hitesh"
const repocount=50

//console.log(name+repocount+"value");

console.log(`HEllo my name is ${name}and my repo count is ${repocount}`);

const gameName=new String('Suryansh-08')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

 const newString=gameName.substring(0,3)
 console.log(newString);

 const anotherString =gameName.slice(-8,4)
 console.log(anotherString);

 const newStringOne="   suryansh   "
 console.log(newStringOne);
 console.log(newStringOne.trim());
 
 const url="https://surya.com/surya%20tyagi"
 console.log(url.replace('%20','-'))
 console.log(url.includes('hitesh'));
 console.log(gameName.split('-'));
 
 
