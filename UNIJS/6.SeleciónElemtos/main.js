'use strcit'
// Selector por id 
const art1 = document.getElementById('art1')
//SElecion por id queryselector
const art2 = document.querySelector('#artt2')
//Selector por el atributo name
const contenedor = document.getElementsByName('contenedorImg');
// Selector por el atributo de class
const subtitle = document.getElementsByClassName('subtitulo');
// Selector queryselector class
const stitle = document.querySelector('.subtitle');
//Seleccionar todos los elementos
const li = document.querySelectorAll('li');

const button = document.querySelector('enviar');

button.addEventListener('click',()=>{
    const name = document.getElementById('name').value;
    alert('Hola ${name}');
});
console.log (subtitle);