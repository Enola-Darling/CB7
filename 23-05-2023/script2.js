import { usersList } from "./utils/credentials.js";

const logIn = document.querySelector(".logInModal");
const userName = document.querySelector(".nomeUtente");
const userPassword = document.querySelector(".password");
const button = document.querySelector(".button");


button.addEventListener("click", (e) => {
  const isAuth = usersList.find(
    (user) =>
      user.username === userName.value && user.password === userPassword.value
  );
  console.log(isAuth);
  if (isAuth) {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        const cart = data.carts.find((item) => item.userId === isAuth.id);
        displayCart(cart);

      });
  } else {
    alert("nome utente o password errate !");
  }
});

const displayCart = (cart) => {
  console.log(cart);

  const cartModal = document.createElement("div");
  cartModal.classList.add("modal", "cart_modal");
  const productsWrapper = document.createElement("div");
  productsWrapper.classList.add("product_wrapper")
  cart.products.forEach(product => {
    const productInfo = document.createElement("div");
    productInfo.classList.add("product_info")
    const prodcutTitle = document.createElement("h3");
    const productQuantity = document.createElement("h4");
    const productPrice = document.createElement("h4");
    prodcutTitle.textContent = product.title;
    productQuantity.textContent = "Quantity: " + product.quantity;
    productPrice.textContent = "Price:" + (product.price * product.quantity);

    productInfo.appendChild(prodcutTitle);
    productInfo.appendChild(productQuantity);
    productInfo.appendChild(productPrice);
    productsWrapper.appendChild(productInfo);
  });
  const cartFooter = document.createElement("div");
  cartFooter.classList.add("cart_footer");
  const cartTotal = document.createElement("h2");
  cartTotal.textContent = cart.total;
  cartFooter.appendChild(cartTotal);
  cartModal.appendChild(productsWrapper);
  document.body.appendChild(cartModal);
};
