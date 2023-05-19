import { cartItems, cartEl, rootEl, productList , navbarEl , heroEl , productListTitle, productListData } from "../script.js";
import { usersList } from "./credentials.js";
export const cE = (tagName) => document.createElement(tagName);
export const qS = (query) => document.querySelector(query);
export const qSA = (query) => document.querySelectorAll(query);

// Sezione Singolo Prodotto (card) //

export const createProduct = (data) => {
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const priceEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const buttonEl = cE("button");

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

  textWrapperEl.append(titleEl, priceEl, descriptionEl, ratingEl);
  wrapperEl.append(imageEl, textWrapperEl);

  return wrapperEl;
};

// Sezione prodotto (modale)

export const createProductModal = (productData, parent = null) => {
  console.log(productData);
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

  buyTextFirstBtnEl.addEventListener("click", () => {
    cartItems.push(productData);
    wrapperEl.remove();
    console.log(cartItems);
  });
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

export const createCartModal = (launcherEl) => {
  const wrapperEl = cE("div");

  wrapperEl.className = "cartModal";
  const closeButton = cE("button");
  closeButton.className = "cart__close-button";
  closeButton.textContent = "Close";

  cartItems.forEach((item) => {
    const titleEl = cE("h4");
    const descriptionEl = cE("p");
    titleEl.textContent = item.title;
    descriptionEl.textContent = item.description;
    wrapperEl.append(titleEl, descriptionEl);
  });

  
  closeButton.addEventListener("click", () => {
    wrapperEl.remove();
    launcherEl.disabled = false;
  });
  wrapperEl.append(closeButton);

  return wrapperEl;
};

// LogIN //


export const createLogIn = () => {
  const wrapperEl = cE("form");
  const usernameInputEl = cE("input");
  const passwordInputEl = cE("input");
  const submitBtnEl = cE("input");

  wrapperEl.className = "login";
  usernameInputEl.type = "text";
  usernameInputEl.placeholder = "Username";
  passwordInputEl.type = "password";
  passwordInputEl.placeholder = "Password";
  submitBtnEl.type = "submit";
  
  wrapperEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const isAuth = !!usersList.find(
    (user) => 
    user.username === event.srcElement[0].value &&
    user.password === event.srcElement[1].value
    );

    if (isAuth) {
      navbarEl.style.display = "flex";
      heroEl.style.display = "flex";
      rootEl.append(productListTitle, productList);
      rootEl.removeChild(wrapperEl);
    } else {
      alert("Username e/o password non corretta");
    }
  });

  wrapperEl.append(usernameInputEl, passwordInputEl, submitBtnEl);
  return wrapperEl;
};

    // usersList.forEach((item) =>{
    //   if(item.username === event.srcElement[0].value){
    //     console.log("username trovato")
    //     if (item.password === event.srcElement[1].value ){
    //       console.log("password corretta")
    //       alert("hai effettuato il Login")
    //     }
    //     else {
    //       console.log("password errata");  
    //     }
    //   }
     
    // })
  