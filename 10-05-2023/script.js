/*const sumButton = document.querySelector("#sum");
const diffButton = document.querySelector("#diff");
const mulButton = document.querySelector("#mul");
const divButton = document.querySelector("#div");
const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const resultElement = document.querySelector("#result");

sumButton.addEventListener("click", function () {
    console.log("e' stato premuto piu'");
    const ret = firstNumber.valueAsNumber + secondNumber.valueAsNumber;
    resultElement.innerText = ret;
});

diffButton.addEventListener("click", function () {
  console.log("e' stato premuto meno");
  const ret = firstNumber.valueAsNumber - secondNumber.valueAsNumber;
  resultElement.innerText = ret;
});


mulButton.addEventListener("click", function () {
    console.log("e' stato premuto per");
    const ret = firstNumber.valueAsNumber * secondNumber.valueAsNumber;
    resultElement.innerText = ret;
});


divButton.addEventListener("click", function () {
    console.log("e' stato premuto dividi");
    const ret = firstNumber.valueAsNumber / secondNumber.valueAsNumber;
    resultElement.innerText = ret;
});*/


const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const resultElement = document.querySelector("#result");
const operations = document.querySelectorAll(".operation");

const operationsFns = {
    "sum": (n1, n2) => n1 + n2,
    "diff": (n1, n2) => n1 - n2,
    "mul": (n1, n2) => n1 * n2,
    "div": (n1, n2) => n1 / n2,
}

const theCallback = (event) => {
    const element = event.target;
    const theOpToExecute = element.dataset.op
    resultElement.innerText = operationsFns[theOpToExecute](
        firstNumber.valueAsNumber, secondNumber.valueAsNumber)
}

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", theCallback)
}
