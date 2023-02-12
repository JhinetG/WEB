'use strict';
// Contenedores o variables /var-> Global / let-> local / const-> constantes
// Funciones:

let num1 = 9;
const IVA_P=3.19;

//Funcion clasica
function addition(num1, num2){
    return num1 + num2;
}
//Invocion de la funcion
let response = addition(num1,8);
/*console.log(response);
console.log(addition(12,8))*/

//Funcion tipo flecha
const avg = (n1,n2,n3) =>{
    return(n1 + n2 +n3)/3;
}

console.log(avg(num1,IVA_P,78));

