
console.group("Cuadrado")
// const Ladocuadrado = 5;
// console.log("Los cuatro lados del cuadrado miden " + Ladocuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;    
} 

function areaCuadrado(lado){
    return lado * lado;
}


console.groupEnd()

console.group("Triangulo")
// codigo del Triangulo
const ladoUno = 6;
const ladoDos = 6;
const base = 4;
const altura = 4.8;

console.log("Los  lados del triangulo miden " 
            +ladoUno + "cm, "
            +ladoDos + "cm, "
            +base + "cm");

console.log(ladoUno, ladoDos, base)
function perimetroTriangulo() {
    return ladoUno + ladoDos + base;
}



function areaTriangulo(base, altura){
    return (base * altura)/2;
} 

console.groupEnd()

console.group("Circulo")
// Código de Círculo
// Radio Diametro PI
//Area

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo () {
    const diametro = diametroCirculo();
    return diametro * Math.PI;
}
function areacirculo (radio){
    return (radio * radio) * Math.PI;
} 
console.groupEnd()

function calculaPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

