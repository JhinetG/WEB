'use strict'
import{checkAvg} from './validate.js';
const cardE = document.getElementById('carsEstudiantes');
const students = [];

const paintCard = (typ )=>{
    typ = typ.toUpperCase();//ESta volviendo todo mayuscula y se esta guardando en typ.
    const fragment = document.createCommentFragment();//fragmant va a guardar todos los estudiantes y va agregar una sola vez en el DOM
    const templateStudent = Document.querySelector('#templateEstudiantes').content; //content:Le estoy especificando que nesecito tod el contenido de ('#templateEstudiantes').
    if (typ ==='ESTUDIANTE'){
        for (let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del<i> Estudiantes</i>";
            cloneTemp.querySelector('.data-card') .innerHTML = `NOMBRE: ${i.nombre.toUpperCase()} APELLIDOS:${i}`;cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES:${i.promedio}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg (i.promedio)}`;
            fragment.appendChild(cloneTemp);// appendChild: Agrega al frament   
        }
    }else{

    }
    cardE.appendChild(fragment);//Esta agregando todos los estudiantes del fragment al (cardE).
};

const addStudent = (name,lastName,avg)=>{
    //Objeto literal de JS
    let student = {
        nom: name,
        ape: lastName,
        prom: avg,
    }
    students.push(student);// Se van agregar los estudiantes en el arreglo students.
    alert('Se agrego estudiante');
};
export{paintCard,addStudent}
