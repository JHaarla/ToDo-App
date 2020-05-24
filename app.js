// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// FUNCTIONS
function addTodo(event) {
  event.preventDefault();
  // DOM STUFF
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //CREATE li to hold todo items
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //ADD TODO LOCAL STORAGE
  saveLocalTodos(todoInput.value);

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
    removeLocalTodos(todo);
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

function filterTodo(event) {
  let todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "done":
        if (todo.classList.contains("done")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "not-done":
        if (!todo.classList.contains("done")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//LOCAL STORAGE STUFF
function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //CREATE li to hold todo items
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
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
  });
}

function removeLocalTodos(todo) {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
