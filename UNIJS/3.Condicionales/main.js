'use strict'
// Condicionales
let num1 = prompt("Introduzca un numero")

let resp= (num1 > 0);
console.log(resp);

if ( num1>0){
    alert("Es positivo")
}else{
    alert("Negativo")
}
if('0'===0){ //Modo estricto
    console.log("Dentro de un bloque")
}else{
    console.log("Otro bloque")
}

if ('0'==0){
    console.log("Dentro de un bloque")
}
