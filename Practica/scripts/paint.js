import {checkAvg, validateage} from './validate.js'

const cardE = document.getElementById('cardsEstudiantes');
const cardP = document.getElementById('cardsProfesores');
const students = [];
const teachers = [];

const paintCard = (typ) => {
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateEstudiante').content;
    const templateTeacher = document.querySelector('#templateProfesor').content;

    if (typ === 'ESTUDIANTE') {
        for (let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>.";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.prom}`;
            cloneTemp.querySelector(`.text-aprobado`).innerHTML = `${checkAvg(i.prom)}`;
            fragment.appendChild(cloneTemp);
        }
    } else if (typ === 'PROFESOR') {
        for (let i of teachers){
            const cloneTemp = templateTeacher.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Profesor</i>.";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE y APELLIDOS: ${i.nom.toUpperCase()}`;
            cloneTemp.querySelector('.text-profesi').innerHTML = `PROFESION: ${i.profesi.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `EDAD: ${(i.edad)}`;
            fragment.appendChild(cloneTemp);
        }
    }
    cardE.appendChild(fragment);
    cardP.appendChild(fragment);
};

const addStudent = (name,lastname,avg) => {
    //Objeto literal de JS
    let student = {
        nom: name,
        ape: lastname,
        prom: avg,
    }
    students.push(student);
}

const addTeacher = (name,profesion,age) => {
    let teacher = {
        nom: name,
        profesi: profesion,
        edad: age,
    }
    teachers.push(teacher);
}

const modalAlert = (cad) => {
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = '../assets/img/cancelar.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML = `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta").remove();
    }

}

export {paintCard,addStudent,addTeacher,modalAlert}