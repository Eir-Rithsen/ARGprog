let name1 = prompt("Please insert your name");
let surname1 = prompt("Now please insert a Surname");

const BLANCOS =" ";
alert("Your name and surname are as follows" + BLANCOS + name1 + BLANCOS + surname1)
console.log("¡Welcome again"+ BLANCOS +name1 + BLANCOS + surname1 + "!");

let numberA = parseInt(prompt("Insert a number to calculate it's square"));
let square1 = Math.pow(numberA, 2);

/* ANOTHER EXAMPLE:
Square a number using the exponentiation operator
JavaScript provides you with the exponentiation operator 
marked by two asterisk symbols (**) like this:

let square1 = number1 ** 2 // 2*2*2 = 8*/


/*Square a number by creating your own helper function
Finally, you can also find the square a number by writing a small helper function as follows:

function square(num){
  return num * num;
}
By writing a function like square() above, you can call the function anytime you need to find the square of a number:

console.log(square(2)); // 4
console.log(square(5)); // 25
console.log(square(8)); // 64
This way, you can reduce repetition in your code and make it cleaner.
*/


alert("The square of the number" + BLANCOS + numberA + BLANCOS + "is =" + square1); 