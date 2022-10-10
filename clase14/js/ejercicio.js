/*
calculadora:

    +
    -
    *
    /
*/
function calcular() {//inicio
    let op1;
    let op2;
    let operacion;
    let resultado;

    //leer op1
    //prompt('Ingrese op1');
    //javascrip t tiene una funcion: document.getElementById('id').value;
    op1 = document.getElementById('op1').value;
    operacion = document.getElementById('operacion').value;
    op2 = document.getElementById('op2').value;

    console.log('op1 vale: ', op1)
    console.log('operacion vale: ', operacion)
    console.log('op2 vale: ', op2)  

if(operacion == '+') {
    resultado = parseInt(op1) + parseInt(op2) ; //string > Number
}


if(operacion == '-') {
    resultado = parseInt(op1) - parseInt(op2) ; //string > Number
}


if(operacion == '/') {
    if(parseInt(op2) !==0){
        resultado = parseInt(op1) / parseInt(op2);
    } else{
     resultado= 'No se puede dividir entre cero'
    }
}


if(operacion == '*') {
    resultado = parseInt(op1) * parseInt(op2) ; //string > Number
}

console.log(resultado);
//actualizar el label del html con el rdo de la operacion
document.getElementById('resultado').innerHTML = resultado;

}//fin
function borrar() {
    document.getElementById('op1').value='';
    document.getElementById('op2').value='';
    document.getElementById('operacion').value='';
    document.getElementById('resultado').innerHTML='';
}
