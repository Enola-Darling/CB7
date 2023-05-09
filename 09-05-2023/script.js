/*****************************************/

/****************Es: 1*******************/

const divTest = document.querySelector('.test-container');
const message = document.createElement('p');
const button = document.querySelector('.btn-toggle-message');

message.textContent = 'Benvenuto nel nostro sito web!';

function showMessage() {
  divTest.classList.add('active');
  divTest.appendChild(message);
}

function hideMessage() {
  message.remove();
  divTest.classList.remove('active')
}

button.addEventListener('click', function() {
  divTest.classList.contains('active') ? hideMessage() : showMessage();
});

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