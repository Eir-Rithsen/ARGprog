console.log 
("Acontinuacion se mostrara los 4 resultados de las operaciones numericas basicas: suma, resta, multiplicacion y division");
alert("Por favor INGRESE 2 numeros distintos")

let numeroA = parseInt(prompt("ingrese el numeroA"));
let numeroB = parseInt(prompt("igrese el numeroB"));
console.log("VALOR ASIGNADO a A:" + numeroA)
console.log("VALOR ASIGNADO a B:" + numeroB)

alert("se realizaran las siguientes operaciones con los numeros ingresados A + B, B - A, B * A, A / B, en ese preciso orden y los resultados seran mostrados en la consola")

let resultadoSuma = (numeroA + numeroB);
console.log("la suma de A + B es:" + resultadoSuma)

let resultadoResta = numeroB - numeroA;
console.log("la resta de B - A es:" + resultadoResta)

let resultadoProducto = numeroB * numeroA;
console.log("la multiplicacion de B * A es:" + resultadoProducto)

let resultadoDivision = numeroA / numeroB;
console.log("la division de A / B es:" + resultadoDivision);

console.log("Actividad N°2")
let textoA = "Argentina";
console.log("TextoA es:" + textoA);
let textoB ="Programa";
console.log("TextoB es:" + textoB);
let textoC ="4.0";
console.log("TextoC es:" + textoC);
const BLANCO =" ";
console.log("La constanteC es:" + BLANCO);
let resultado = textoA + BLANCO + textoB + BLANCO +textoC;
console.log("la concatenacion es:" + resultado);
