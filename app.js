// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// FUNCTIONS
function addTodo(event) {
  event.preventDefault();
  // DOM STUFF
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
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

  //CLEAR INPUT FIELD
  todoInput.value = "";
}

function deleteCheck(event) {
  //   console.log(event.target);
  const item = event.target;
  //DELETE TODO ITEM
  if (item.classList[0] === "delBtn") {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("away");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // DONE BTN FUNCTIONALITY
  if (item.classList[0] === "doneBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("done");
  }
}
