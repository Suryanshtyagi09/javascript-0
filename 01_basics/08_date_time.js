//Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getHours());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(typeof myDate);

//let myCreatedDate=new Date(2025,11,17)
//let myCreatedDate=new Date(2025,11,17,5,3)
let myCreatedDate=new Date("11-17-2025")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

// `${newDate.getDay()} and the time

newDate.toLocaleString('default',
    {weekday:"long"
        
    })


