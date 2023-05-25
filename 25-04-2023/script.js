const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

// const createToDoList = () =>{
// const listModal = createEl("div", "", { name: "class", value: "List_Modal" });
// const listWrapper = createEl("div", "", {
//   name: "class",
//   value: "list_Wrapper",
// });
// const addSection = createEl("div", "", { name: "class", value: "add_sectiom" });
// const AddElement = createEl("input", "", {
//   name: "type",
//   value: "text",
//   name: "placeholder",
//   value: "Aggiungi elemento",
// });
// const button = createEl("button", "Add TODO");
// const toDoList = createEl("div", "", { name: "class", value: "to_list" });
// const inputToDo = createEl("input", "", { name: "type", value: "text" });

// addSection.append(AddElement, button);
// // toDoList.append(inputToDo, toDoCeckBox);
// listWrapper.append(addSection, toDoList);
// listModal.append(addSection, toDoList, listWrapper);
// document.body.append(listModal);

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
      const toDoItem = createEl("p", item.todo,{name:"class",value:"todo_item"});
      const toDoCheckBox = createEl("input", "", {
        name: "type",
        value: "checkbox",
      });
      toDoCheckBox.checked = item.completed;
      toDoElement.append(toDoItem, toDoCheckBox);
      document.body.appendChild(toDoElement);
    });
  });
