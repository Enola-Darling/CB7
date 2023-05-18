import { cE, qS, qSA, createProduct, createProductModal, createCartModal } from "./utils/fn.js";

const productMock = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
// SYNC
const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h1");
const searchProductEl = qS(".searchInput");
export const cartEl = qS(".cart");
// let searchProductValue = "";
let productListData = [];
export let cartItems = [];

productList.className = "productList";
productListTitle.textContent = "Product for you!";
rootEl.append(productListTitle, productList);

// ASYNC

// productList.append(createProduct(productMock));
fetch("https://dummyjson.com/product")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((product) =>
      productList.append(createProduct(product))
    );
    return data.products;
  })
  // Sol. 1 (w/o request)
  /*    .then((products) => {
  console.log(products);
  const productCardEls = qSA(".productCard");
  console.log(productCardEls);
  productCardEls.forEach((productEl) => {
    productEl.addEventListener("click", () => {
      console.log(productEl)
      const product = products.find((p) => p.id == productEl.dataset.productId);
      console.log(product);
      rootEl.append(createProductModal(product, rootEl));
    });
  });
});*/
  .then(() => {
    const productCardEls = qSA(".productCard");
    productCardEls.forEach((productEl) => {
      productEl.addEventListener("click", () => {
        console.log(productEl);
        fetch(`https://dummyjson.com/product/${productEl.dataset.productId}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(createProductModal(data, rootEl)));
      });
    });
  });

// EVENTS//

searchProductEl.addEventListener("input", (evt) => {
  if (evt.target.value.length >= 3) {
    productList.textContent = "";
    console.log("===>", productList);

    productListData
      .filter((product) =>
        product.title.toLowerCase().includes(evt.target.value.toLowerCase())
      )
      .forEach((obj) => productList.append(createProduct(obj)));
  }
});

cartEl.addEventListener("click", () => {
  rootEl.append(createCartModal(cartItems, rootEl));
  const cartModal = qS(".cartModal");

  cartEl.disabled = true;
  cartModal.classList.add("cartModal__active");
});