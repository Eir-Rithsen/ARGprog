alert("Entre variables numéricas podemos realizar operaciones matemáticas, como sumas, restas, multiplicaciones y divisiones");
alert("➔ El signo igual “=” es el operador de asignación: asigna a una variable el valor que está del lado derecho del igual");
let numeroA = parseInt(prompt("ingrese el numeroA"));
let numeroB = parseInt(prompt("igrese el numeroB"));
alert("NUMEROC es una constante cuyo valor sera 3")
const NUMEROC = 3;
alert("se sumaran los numeros ingresados A + B")
let resultadoSuma = numeroA + numeroB;
alert("la suma de A + B es:" + resultadoSuma)

alert("se restaran los numeros ingresados B - A")
let resultadoResta = numeroB - numeroA;
alert("la resta de B - A es:" + resultadoResta)

alert("se multiplicaran los numeros ingresados B * C")
let resultadoProducto = numeroB * NUMEROC;
alert("la multiplicacion de B * C es:" + resultadoProducto)

alert("se dividiran los numeros ingresados A / B")
let resultadoDivision = numeroA / numeroB;
alert("la division de A + B es:" + resultadoDivision);