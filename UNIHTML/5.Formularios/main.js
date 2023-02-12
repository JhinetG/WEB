'use strict';
// VARIABLES O CONTENEDORES
var num1 = 13; // Caracter global
let num2 = 25; // Ambito local
const IVA = 19.1;

let boton = document.getElementById('enviar');
const formulario = document.getElementById('form');

console.log(boton)
/*boton.abddEventListener('click',(e)=>{
    e.preventDefault.log();
    console.log(formulario[0].value);
    console.log(formulario[1].value);
    console.log(formulario[5].value);
})*/
formulario.abddEventListener('submit',(e)=>{
    e.preventDefault.log();
    console.log(e. target[1].value);
})
