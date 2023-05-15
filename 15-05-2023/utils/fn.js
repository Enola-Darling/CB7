export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

export const createProduct = (data) => {
    const wrapperEl = cE ("div");
    const imageEl = cE ("img");
    const titleEl = cE ("h3");
    const priceEl = cE ("h3")
    const descriptionEl = cE ("p");
    const ratingEl = cE ("p");
    const buttonEl = cE ("button");

    wrapperEl.className = "productCard";
    imageEl.src = data.thumbnail;
    imageEl.alt = data.title;
    titleEl.textContent = data.title;
    priceEl.textContent = data.price + "$";
    descriptionEl.textContent = data.description;
    ratingEl.textContent = data.rating;
    buttonEl.textContent = "Add to Cart";

    wrapperEl.append (imageEl, titleEl, priceEl, descriptionEl, ratingEl, buttonEl);


    return wrapperEl;
};