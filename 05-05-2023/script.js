
// let num1 = parseInt(prompt("inserisci il primo numero"));
// let calculator = prompt("inserisci operatore");
// let num2 = parseInt(prompt("inserisci il secondo numero"));
// let result;

// switch (calculator) {
//   case "+":
//     result = num1 + num2;
//     console.log("il risultato è" + result);
//     break;

//   case "-":
//     result = num1 - num2;
//     console.log("il risultato è" + result);
//     break;

//   case "*":
//     result = num1 * num2;
//     console.log("il risultato è" + result);
//     break;

//   case "/":
//     result = num1 / num2;
//     console.log("il risultato è" + result);
//     break;
// }


/*********** Es: 1 ****************/

// function calc (num1, num2, opt) {
      
//     if ( opt === '+') {
//          return consol.log (num1 + num2); 
//           } else if (opt === '*') {
//         return consol.log (num1 * num2); 
//           } else if ( opt === '-') {
//             conol.log(num1 - num2);
//           } else {
//             consol.log(num1/num2);
//           } 
//         }


/*********** Es: 2 ****************/

function personInfo(obj) {
   return `La ragazza ${obj.name} è ${obj.job}$$`;
}

let person = {
    name: "Luna",
    surname: "Raimondo",
    age: "33",
    job: "designer",
};

console.log(personInfo(person));



/*********** Es: Avanzato ****************/

// function calc(num1, num2, opt) {
//     function somma() {
//         return console.log(num1 + num2)
//     }
//     function moltiplicazione() {
//         return console.log(num1 * num2)
//     }
//     function sottrazione() {
//         return console.log(num1 - num2)
//     }
//     function divisione() {
//         return console.log(num1 / num2)
//     }

//   if ( opt === '+') {
//     conole.log(somma());
//   } else if (opt === '*') {
//      consol.log(moltiplicazione());
//   } else if ( opt === '-') {
//     conol.log(sottrazione());
//   } else {
//     consol.log(divisione());
//   } 
// }




