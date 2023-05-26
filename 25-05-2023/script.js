const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

// const createToDoList = () =>{
const listModal = createEl("div", "", { name: "class", value: "List_Modal" });
const listWrapper = createEl("div", "", {
  name: "class",
  value: "list_Wrapper",
});
const addSection = createEl("div", "", { name: "class", value: "add_section" });
const addInput = createEl("input", "", {
  name: "type",
  value: "text",
  name: "placeholder",
  value: "Aggiungi elemento",
});
const addButton = createEl("button", "Add TODO");
const cleanUpButton = createEl("button", "Clean Up");
const toDoList = createEl("div", "", { name: "class", value: "to_list" });

addSection.append(addInput, addButton, cleanUpButton);
// toDoList.append(inputToDo, toDoCeckBox);
listWrapper.append(addSection, toDoList);
listModal.append(addSection, toDoList, listWrapper);
document.body.append(listModal);

// };

const baseUrl = "https://dummyjson.com/todos";
// GET

fetch(baseUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.todos);
    data.todos.forEach((item) => {
      const toDoElement = createEl("div", "", {
        name: "class",
        value: "todo_element",
      });
      const toDoItem = createEl("p", item.todo, {
        name: "class",
        value: "todo_item",
      });
      const toDoCheckBox = createEl("input", "", {
        name: "type",
        value: "checkbox",
      });
      toDoCheckBox.checked = item.completed;
      toDoCheckBox.dataset.id = item.id;
      toDoElement.append(toDoItem, toDoCheckBox);
      document.body.appendChild(toDoElement);
    });
  });

addButton.addEventListener("click", () => {
  fetch(`${baseUrl}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: addInput.value,
      completed: false,
      userId: 5,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
});

cleanUpButton.addEventListener("click", () => {
  const checkedCheckboxes = document.querySelectorAll(
    ".todo_element input:checked"
  );
  checkedCheckboxes.forEach((e) =>
    fetch(`${baseUrl}/${e.dataset.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log)
  );
});
