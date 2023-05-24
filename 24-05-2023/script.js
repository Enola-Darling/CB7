// Es:1

// let persona = ["Mario", "Rossi", "Italia"];

// let [nome, cognome, paese] = persona;

// console.log(nome);
// console.log(cognome); 
// console.log(paese); 

// // Es:2

// const bookData = {
//   title: "Il Nome della Rosa",
//   author: "Umberto Eco",
//   year: 1980,
// };

// const { title, author, year } = bookData;

// console.log(title); // Output: Il Nome della Rosa
// console.log(author); // Output: Umberto Eco
// console.log(year); // Output: 1980

// Es: Avanzato

let persona = ["Mario", "Rossi"];

let [nome, cognome, paese = "Non specificato"] = persona;

console.log(nome); 
console.log(cognome); 
console.log(paese); 

const bookData = {
    title: "Il Nome della Rosa",
    author: "Umberto Eco",
  };
  
  const { title, author, year = "Non specificato" } = bookData;
  
  console.log(title); 
  console.log(author); 
  console.log(year);