import {validateString, vAvg, checkAvg} from './validate.js';
import {paintCard,addStudent,addTeacher,modalAlert} from './paint.js'

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');
const opt = document.getElementById('opcion');

opt.onchange = function (){
    const op = document.getElementById('opcion').value; 
    if (op === 'profesor'){
        document.getElementById('text1').innerText="Nombres y apellidos:";
        document.getElementById('text2').innerText="Profesion:";
        document.getElementById('text3').innerText="Edad:";
    } else if (op === 'estudiante'){
        document.getElementById('text1').innerText="Nombres:";
        document.getElementById('text2').innerText="Apellidos:";
        document.getElementById('text3').innerText="Promedio:";
    }
}

/* Generar eventos
    1. Colocando el metodo en el atributo onclick, onmouseover, onmouseout de la etiqueta
    const captura = () => {
        console.log('Hizo click');
    }
    2. Metiante propiedad
    btnAgregar.onclick = function () {
        console.log('evento mediante propiedad');
    }
    3. Mediante el addEven......
*/

btnAgregar.onclick = function () {
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const nameP = document.getElementById('nombre').value;
    const profesi = document.getElementById('apellido').value;
    const edad = parseInt(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;

    if (op === 'estudiante'){
        if (validateString(name) && validateString(lastName) && op !=0){
            if ((!isNaN(avg)) && (vAvg(avg))){
                addStudent(name,lastName,avg)
                modalAlert("Se agrego el estudiante")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            } else {
                document.querySelector('#promedio').value= "";
                modalAlert("Promedio Invalido");
            }
        } else {
            modalAlert("Datos invalidos, revisar campos");
        }
    } else if (op === 'profesor') {
        if (validateString(nameP) && validateString(profesi)){
            if (!isNaN(edad) && op !=0){
                addTeacher(nameP, profesi,edad)
                modalAlert("Se agrego el profesor")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            }
        } else {
            modalAlert("Datos invalidos, revisar campos");
        }
    }
}
btnMostrar.addEventListener('click', function(){
    const op = document.getElementById('opcion').value;
    if (op === 'estudiante'){
        paintCard("ESTUDIANTE");
    } else if (op === 'profesor') {
        paintCard("PROFESOR");
    }  
})