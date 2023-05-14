
var imgArray = [
    "https://picsum.photos/200/300?grayscale1",
    "https://picsum.photos/200/300?grayscale2",
    "https://picsum.photos/200/300?grayscale3",
    "https://picsum.photos/200/300?grayscale4",
    "https://picsum.photos/200/300?grayscale5",
    "https://picsum.photos/200/300?grayscale6",
    "https://picsum.photos/200/300?grayscale7",    
];

/**
 * Crea un elemento con tagName @tagName e gli associa un insieme di classi fornite come argomenti finali
 * @param {string} tagName
 * @param {...string} classNames 
 * @returns HTMLElement
 */
function createElementWithClasses(tagName, ...classNames) {
    const element = document.createElement(tagName);
    element.classList.add(...classNames);
    return element;
}

const rootEl = document.getElementById("root"); 
const carouselItem = createElementWithClasses("img", "carousel_item");
const dotsEl = createElementWithClasses("div", "dots");
rootEl.appendChild(carouselItem);
rootEl.appendChild(dotsEl);


// L'array dots tiene i dot associato alle immagini in ordine 
// (con lo stesso ordine con cui figurano in imgArray, vedi forEach successivo)
const dots = [];
// Imposto una variabile globale i a 0 che tiene l'indice corrente,
//  ovvero l'indice dell'immagine in imgArray corrente, del carousel.
var i = 0;

// costruisco l'array dots, gli elementi html dots e il loro (click) event listener
imgArray.forEach((img, index) => {
    const dot = createElementWithClasses("div", "carousel_dot");
    dots.push(dot);
    dotsEl.appendChild(dot);
    dot.addEventListener("click", () => {
        dots[i].classList.remove("active");
        i = index;
        carouselItem.src = imgArray[i];
        dots[i].classList.add("active");
    });
});

// Imposto la prima immagine al primo loading della pagina (i = 0) e aggiungo la classe active al dot associato
carouselItem.src = imgArray[i];
dots[i].classList.add("active");

// la funzione setNextImage e' usata per incrementare l'indice i, cambiare il dot attivo e l'immagine visualizzata
const setNextImage = () => {
    // Sto rimuovendo la class active all'elemento i-esimo dell'array dots.
    // Lo faccio prima di incrementare o decrementare i, cosi' da non dover
    // gestire gli edge case anche per dots.
    dots[i].classList.remove("active");
    /*i++; 
    if (i >= imgArray.length) {
        i = 0;
    }*/
    i = (i + 1) % imgArray.length;
    carouselItem.src = imgArray[i];
    dots[i].classList.add("active");
}

const rightButton = document.getElementById("right_button");
rightButton.addEventListener("click", setNextImage);

const leftButton = document.getElementById("left_button");
leftButton.addEventListener("click", () => {
    // Sto rimuovendo la class active all'elemento i-esimo dell'array dots.
    // Lo faccio prima di incrementare o decrementare i, cosi' da non dover
    // gestire gli edge case anche per dots.
    dots[i].classList.remove("active");
    i--;
    if (i < 0) {
        i = imgArray.length - 1;
    }
    carouselItem.src = imgArray[i];
    dots[i].classList.add("active");
});

// Aggiungo un handler per cambiare l'immagine periodicamente
const carouselPeriod = 5000;
setInterval(setNextImage, carouselPeriod);

