'use strict'
const parrafo2 = document.getElementsByClassName('second_P')
//Craer un elemento
const mySubtitle = document.createElement("h2");
//Asignar contenido
mySubtitle.textContent = "ESto es un subtitulo desde Javascript";
//Agregar atributos al elemento
mySubtitle.id="sub1";
mySubtitle.className="subtitulo";
mySubtitle.style ="color:red; font-weight:bold";
mySubtitle.setAttribute("name","sub1");
//Insertar al DOM
document.body.appendChild(mySubtitle);
parrafo2.appendChild(mySubtitle);
const parrafo3 = document.createElement("p");
parrafo3.textContent= <h3>Sub3</h3>;
parrafo2.appendChild(parrafo3);

