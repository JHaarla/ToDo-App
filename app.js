// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);

// FUNCTIONS
function addTodo(event) {
  event.preventDefault();
  // DOM STUFF
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = "heyoo";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //DONE BUTTON
  const doneButton = document.createElement("button");
  doneButton.innerHTML = "<i class='fas fa-check'></i>";
  doneButton.classList.add("doneBtn");
  todoDiv.appendChild(doneButton);

  //DELETE BUTTON
  const delButton = document.createElement("button");
  delButton.innerHTML = "<i class='fas fa-trash'></i>";
  delButton.classList.add("delBtn");
  todoDiv.appendChild(delButton);

  //APPEND TO LIST
  todoList.appendChild(todoDiv);
}
