import { cartItems, cartEl } from "../script.js";
export const cE = (tagName) => document.createElement(tagName);
export const qS = (query) => document.querySelector(query);
export const qSA = (query) => document.querySelectorAll(query);

// Sezione Singolo Prodotto (card) //

export const createProduct = (data) => {
    const wrapperEl = cE ("div");
    const textWrapperEl = cE ("div");
    const imageEl = cE ("img");
    const titleEl = cE ("h3");
    const priceEl = cE ("h3")
    const descriptionEl = cE ("p");
    const ratingEl = cE ("p");
    const buttonEl = cE ("button");

    wrapperEl.className = "productCard";
    wrapperEl.dataset.productId = data.id;
    textWrapperEl.className = "productCard__text";
    imageEl.src = data.thumbnail;
    imageEl.alt = data.title;
    titleEl.textContent = data.title;
    priceEl.textContent = data.price + "$";
    descriptionEl.textContent = data.description;
    ratingEl.textContent = data.rating;
    // buttonEl.textContent = "Add to Cart";

    textWrapperEl.append (titleEl, priceEl, descriptionEl, ratingEl);
    wrapperEl.append (imageEl,textWrapperEl);

    
    return wrapperEl;
};


    // Sezione prodotto (modale)

    export const createProductModal = (productData, parent = null) => {
        console.log(productData)
        const wrapperEl = cE("div");
        const overlayEl = cE("div");
        const galleryEl = cE("div");
        const mainImgEl = cE("img");
        // const thumbWrapperEl = cE("div");
        const textEl = cE("div");
        const mainTextEl = cE("div");
        const mainTextTitleEl = cE("h1");
        const mainTextDescEl = cE("p");
        const mainTextRateEl = cE("p");
        const buyTextEl = cE("div");
        const buyTextFirstBtnEl = cE("button");
        const buyTextSecondBtnEl = cE("button");
        // const closeBtnEl = cE("button");
      
        wrapperEl.className = "modalProduct";
        overlayEl.className = "modalOverlay";
        galleryEl.className = "modalProduct__gallery";
        mainImgEl.src = productData.thumbnail;
        mainImgEl.alt = productData.title;
      
        textEl.className = "modalProduct__text";
        mainTextEl.className = "modalMainText";
        mainTextTitleEl.textContent = productData.title;
        mainTextDescEl.textContent = productData.description;
        mainTextRateEl.textContent = productData.rating;
      
        buyTextEl.className = "modalMainBuy";
        buyTextFirstBtnEl.textContent = "Compra adesso";
        buyTextSecondBtnEl.textContent = "Torna indietro";

    // closeBtnEl.className = "closeModalBtn";
    // closeBtnEl.textContent = "X";

    // productData.images.forEach(image => )

  mainTextEl.append(mainTextTitleEl, mainTextDescEl, mainTextRateEl);
  buyTextEl.append(buyTextFirstBtnEl, buyTextSecondBtnEl);
  galleryEl.append(mainImgEl);
  textEl.append(mainTextEl, buyTextEl);
  wrapperEl.append(overlayEl, galleryEl, textEl);

  if (parent) {
    overlayEl.addEventListener("click", () => parent.removeChild(wrapperEl));
  }

  return wrapperEl;
};


// Add to Cart //

export const createCartModal = (cartItems) => {
  const wrapperEl = cE ('div');

  wrapperEl.className = "cartModal";

  cartItems.forEach((Item)=> {
    const titleEl = cE ('h4');
    const description = ("p");

  titleEl.textContent = item.title;
  description.textContent = item.description;
  wrapperEl.append(titleEl, descriptionEl);
});

  return wrapperEl;
};
