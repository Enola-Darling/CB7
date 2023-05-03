
// Chiedi all'utente di inserire un numero
const numero = prompt("Inserisci un numero:");

// Converte la stringa inserita dall'utente in un numero intero
const numeroIntero = parseInt(numero);

// Verifica se il numero è pari o dispari utilizzando l'operatore ternario
const messaggio = numeroIntero % 2 === 0 ? "Il numero inserito è pari" : "Il numero inserito è dispari";

// Stampa il messaggio nella console
console.log(messaggio);
