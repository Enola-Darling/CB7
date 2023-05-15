export const cE = document.createElement;
export const qS = document.querySelector;

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
    textWrapperEl.className = "productCard__text";
    imageEl.src = data.thumbnail;
    imageEl.alt = data.title;
    titleEl.textContent = data.title;
    priceEl.textContent = data.price + "$";
    descriptionEl.textContent = data.description;
    ratingEl.textContent = data.rating;
    buttonEl.textContent = "Add to Cart";

    textWrapperEl.append (titleEl, priceEl, descriptionEl, ratingEl, buttonEl);
    wrapperEl.append (imageEl,textWrapperEl);


    return wrapperEl;
};