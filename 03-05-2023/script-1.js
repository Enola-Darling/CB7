
// Chiedi all'utente di inserire un numero
const numero = prompt("Inserisci un numero:");

// Converte la stringa inserita dall'utente in un numero intero
const numeroIntero = parseInt(numero);

// Verifica se il numero è pari o dispari utilizzando l'istruzione if-else
if (numeroIntero % 2 === 0) {
  console.log("Il numero inserito è pari");
} else {
  console.log("Il numero inserito è dispari");
}


