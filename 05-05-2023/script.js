
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

// function calc_simple(num1, num2, opt) {    
//     if (opt === '+') {
//         return num1 + num2; 
//     } else if (opt === '*') {
//         return num1 * num2;
//     } else if (opt === '-') {
//         return num1 - num2;
//     } else if (opt === '/') {
//         return num1 / num2;
//     } else {
//     console.error("undefined operator");
//     }
// }

/*********** Es: 2 ****************/

// function personInfo(obj) {
//    return `${obj.name} è una ${obj.job}`;
// }

// let person = {
//     name: "Luna",
//     surname: "Raimondo",
//     age: "33",
//     job: "designer",
// };

// console.log(personInfo(person));



/*********** Es: Avanzato ****************/

/**
 * Given two numbers, this function calculates the sum.
 * @param {Number} n1 
 * @param {Number} n2 
 * @returns the sum of n1 and n2
 */
function somma(n1, n2) {
    return n1 + n2;
}

function sottrazione(n1, n2) {
    return n1 - n2;
}

function moltiplicazione(n1, n2) {
    return n1 * n2;
}
function divisione(n1, n2) {
    return n1 / n2;
}

function calc(num1, num2, opt) {
    switch (opt) {
        case '+':
            return somma(num1, num2);
        case '-':
            return sottrazione(num1, num2);
        case '*':
            return moltiplicazione(num1, num2);
        case '/':
            return divisione(num1, num2);
        default:
            console.log('undefined operation ' + opt);
    }    
}

let output = calc(2, 3, '-') 
console.log(`output della funzione: ${output}`);
console.log(calc(2, 4, '%'));


/**
 * 
 *  if (opt === '+') {
        return somma(num1, num2);
    } else if (opt === '-') {
        return sottrazione(num1, num2);
    } else if (opt === '*') {
        return moltiplicazione(num1, num2);
    } else if (opt === '/') {
        return divisione(num1, num2);
    } else {
        console.error("undefined operator");
    }
 */