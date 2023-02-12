const validateString = (cad)=>{
    //Ternario -> Abrebiacion de if else
    let response = (cad.length>3)? true : false; // Se esta validando el numero de la cadena
    return response;
}

const validateAvg = (num)=>{ // se esta validando que el num este entre 0-5.
    let response = (num>=0 && num<=5)? true : false;
    return response;
}
const checkAvg = (value)=>{ 
    let result = (value >=3 && value<=5)?
    "APROVADO" : "REPROVADO";
    return result;
}

export {validateString, validateAvg as vAvg, checkAvg} // As : Puedo ponerle un alias

