const books = [
    {
      id: 1,
      bookTitle: "il piccolo pricipe",
      author: "Antoine de Saint Exupery",
      publicationDate: 1943 ,
    },
    {
      bookTitle: "La metamorfosi",
      id: 3,
      author: "di Franz Kafka",
      publicationDate: 1915,
    },
    {
      id: 5,
      bookTitle: "Grandi speranze",
      author: "Charles Dickens",
      publicationDate: 1860,
    }
];

const containerWrapper = document.querySelector(".container-wrapper");


function createCard(book) {
  console.log("sto processando", book);

  // Creo gli elementi html 
  const card = document.createElement("div");
  card.classList.add("card");
  const textDiv = document.createElement("div");
  textDiv.classList.add("text_container");
  const title = document.createElement("h2");
  title.classList.add("title");
  const author = document.createElement("h3");
  author.classList.add("author");
  const pDate = document.createElement("h4");
  pDate.classList.add("pub-date");

  // Metto title, author e pDate dentro textDiv
  textDiv.appendChild(title);
  textDiv.appendChild(author);
  textDiv.appendChild(pDate);
  // Metto textDiv dentro card
  card.appendChild(textDiv);
  
  // Imposto gli innerText di title, author e pDate,
  // rispettivamente, al titolo, autore e data di pubblicazione del libro (book) passato come
  // parametro alla funzione createCard
  title.innerText = book.bookTitle;
  author.innerText = book.author;
  pDate.innerText = book.publicationDate;
  
  // Aggiungo card al containerWrapper.
  containerWrapper.appendChild(card);
}

books.forEach(createCard);


/*for  (let i=0; i< books.length; i++) {
  //console.log(books[i]);
  createCard(books[i], i, books)
}*/