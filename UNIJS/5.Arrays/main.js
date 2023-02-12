'use estrict';
const myArray1 =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let myArray2 = new Array('a','w','z');

for(let i = 0; i <3; i++){
    console.log(myArray2[i]);
}
for(let j in myArray1){
    console.log(myArray1[j]);
}
for(let k of myArray2){ // va ha tomar la variable k y va a guardar todos los objetos del arreglo en variable k
    console.log(k);
}