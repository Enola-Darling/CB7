 function es1() {
//alert("Esercizio 1");
console.log("Esercizio1");

let userNum = parseInt(prompt("Inserici il primo numero!"));

if (userNum % 2 == 0) {
  alert("il numero è pari!");
} else {
  alert("il numero è dispari!");
}
 }

function es2() {
console.log("Esercizio 2");

let userNum2 = parseInt(prompt("inserisci il primo numero"));
userNum2 % 2 == 0
  ? console.log("Il numero è pari!")
  : console.log("il numero è dispari!");
 }

function es3() {
console.log("Esercizio 3");

let num1 = parseInt(prompt("inserisci il primo numero"));
let calculator = prompt("inserisci operatore");
let num2 = parseInt(prompt("inserisci il secondo numero"));
let result;

switch (calculator) {
  case "+":
    result = num1 + num2;
    console.log("il risultato è" + result);
    break;

  case "-":
    result = num1 - num2;
    console.log("il risultato è" + result);
    break;

  case "*":
    result = num1 * num2;
    console.log("il risultato è" + result);
    break;

  case "/":
    result = num1 / num2;
    console.log("il risultato è" + result);
    break;
}
}
 es1();
 es2();
 es3();
