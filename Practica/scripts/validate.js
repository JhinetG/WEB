'use strict';
const validateString = (cad)=>{
    //Ternario-> abreviacion if else
    let response = (cad.length>3) ? true : false;
    return response;
}
const validatevAvg = (num)=>{
    let response = (num>=0 && num<=5) ? true : false;
    return response;
}
const checkAvg = (value) => {
    let result = (value>=3 && value<=5) ? "Aprobado" : "Reprobado";
    return result;
}
const validateage = (edad) => {
    let result = (edad>=0 && edad<=90) ? true : false;
    return result;
}

export{validateString, validatevAvg as vAvg, checkAvg,validateage}

