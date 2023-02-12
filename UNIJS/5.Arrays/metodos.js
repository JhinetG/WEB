'use strict'
//Splict: El metodo split divide un objeto tipo string en un array
let cad ="enero_febrero_marzo_abril_mayo_junio";
const myArray2 =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
console.log(typeof(cad));
let myArray1 = cad.split("_");
console.log(typeof(myArray1));

//Filter: filtar los objetos de un arreglo segun una condicion
const arrayresul = myArray2.filter((e)=> e % 2 === 0);
console.log(arrayresul);

//Método push:Nos permite agregar nuevos objetos a un arreglo
myArray2.push(450);
console.log(myArray2);