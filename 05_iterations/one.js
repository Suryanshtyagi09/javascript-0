//for loop

for(let i = 0; i <=10; i++) {
    const element = i;
    //console.log(element);
}

//table printing through for loop
for( let i=1; i<=10; i++){
    //console.log(`table of : ${i}\n`);
    
    for(let j=1; j<=10; j++){
        //console.log(`${i} * ${j} = ${i*j}\n`);
    }
}

let myArray = ['apple', 'banana', 'grapes', 'mango', 'orange'];

//iterating array using for loop
for(let i=0; i<myArray.length; i++){
    const element = myArray[i];
   // console.log(element);
}

//break and continue statement
for(let i=1; i<=10; i++){
    if(i===5){
        //console.log(`detected 5`);
        //break;
        continue;
    }   
    console.log(` value of i is ${i}`);
}
// break will terminate the loop when condition is met
// continue will skip the current iteration