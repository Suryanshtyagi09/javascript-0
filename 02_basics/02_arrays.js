const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const allHeros=marvel_heros.concat(dc_heros);
//console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heros]

console.log(all_new_heros);

const a2=[1,2,3,[4,5,6],7,[6,7,[5,4]]]
const a3=a2.flat(Infinity)
console.log(a3);

console.log(Array.isArray("abc"));
console.log(Array.from("abc"));
console.log(Array.from({name:"hello"}))// returns empty array

let s1=100
let s2=200
let s3=300

const marks_array=[s1,s2,s3]
console.log(marks_array);

const marks_array2=Array.of(s1,s2,s3)
console.log(marks_array2);

