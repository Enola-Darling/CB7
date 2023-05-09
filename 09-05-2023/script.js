/*****************************************/

/****************Es: 1*******************/

const divTest = document.querySelector(".test");

const paragrafo = document.createElement("p");
paragrafo.className = "testo";


function clickBtn() {
  paragrafo.textContent = "Ciao! Benvenuto nel nostro sito web!";
  divTest.appendChild(paragrafo);
  divTest.classList.add("active");
}

const button = document.querySelector(".btn");

button.addEventListener("click", clickBtn);

/*****************************************/

/****************Es: 2*******************/


const form = document.querySelector("#myForm");
const _ = document.querySelector("#myInput");
const result = document.querySelector(".result");

function handleSubmit(event) {
  event.preventDefault();
  const text = _.value;
  result.textContent = text;
  _.value = "";
}

form.addEventListener("submit", handleSubmit);


/*****************************************/

/****************Avanzato*******************/

const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

addBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = input.value;
  list.appendChild(listItem);
  input.value = "";
});