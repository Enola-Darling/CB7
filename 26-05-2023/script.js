const newAttr = (key, value) => {
  return { key, value };
};

const newClassAttr = (value) => newAttr("class", value);

const createElementWithContentAndAttrs = (type, content, ...attrs) => {
  const element = document.createElement(type);
  element.textContent = content;
  attrs.forEach((e) => element.setAttribute(e.key, e.value));
  return element;
};

const initView = () => {
  document.body.textContent = "";
  const mainView = createElementWithContentAndAttrs("div", "", newClassAttr("list_modal"));
  const listWrapper = createElementWithContentAndAttrs("div", "", newClassAttr("list_wrapper"));
  const addSection = createElementWithContentAndAttrs("div", "", newClassAttr("add_section"));
  const addItemInput = createElementWithContentAndAttrs("input", "", newClassAttr("text_input"), 
    newAttr("type", "text"), newAttr("placeholder", "Aggiungi elemento"), newAttr("id", "add_element"));
  const addButton = createElementWithContentAndAttrs("button", "Add TODO", newClassAttr("Add_button"));
  const todoList = createElementWithContentAndAttrs("div", "", newClassAttr("todo_list"));
  addSection.append(addItemInput, addButton);
  listWrapper.append(addSection, todoList);
  mainView.append(listWrapper);
  document.body.append(mainView);
  return {
    addButton: addButton,
    addItemInput: addItemInput,
    todoList: todoList
  };
};

const createTodoElement = (item, parent) => {
  const elId = `done-${item.id}`;
  const label = createElementWithContentAndAttrs("label", item.text, newAttr("for", elId));
  const input = createElementWithContentAndAttrs("input", "", newAttr("id", elId), newAttr("type", "checkbox"));
  label.addEventListener("click", (e) => {
    done(item.id);
    parent.removeChild(label);
  });
  label.appendChild(input);
  parent.appendChild(label);
};

const createTodoElements = (items, parent) =>
  items.forEach((item, i) => createTodoElement(item, parent));

let todoItems;

const loadItems = (key) => JSON.parse(localStorage.getItem(key));
const storeItems = (key, items) =>
  localStorage.setItem(key, JSON.stringify(items));

const loadTodoItems = () => (todoItems = loadItems("todo") || []);
const storeTodoItems = () => storeItems("todo", todoItems);

loadTodoItems();

const elements = initView();

createTodoElements(todoItems, elements.todoList);

elements.addButton.addEventListener("click", () => {
  const item = {
    text: elements.addItemInput.value,
    id: Math.max(0, ...todoItems.map(e => e.id)) + 1 
  };
  todoItems.push(item);
  storeTodoItems();
  createTodoElement(item, elements.todoList);
});

const done = (itemId) => {
  const itemIndex = todoItems.findIndex((e) => e.id == itemId);
  todoItems.splice(itemIndex, 1);
  storeTodoItems();
};
