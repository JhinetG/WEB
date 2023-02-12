'use strict';
//Condicionales de seleccion
let myValue = 0;

const value=()=>{
    myValue = parseFloat(prompt("Introduzca u valor"));
};
const testValue = (value)=>{
    switch(value){
        case 1: console.log("Introdujo 1");
        break
        case 1: console.log("Introdujo 2");
        break
        default: console.log("Otro valor");
        
    }
    switch(true){
        case value>=0 && value <3 : alert ("Aplazado"); break;
        case value>=0 && value <3 : alert ("Aprobado"); break;
        default: console.log("Error en valor");
    };
};
let resp = value();
testValue(resp);
