const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
let namaku = document.getElementById("namaku");

nameForm.addEventListener("submit",function(event){
    event.preventDefault();

    namaku.textContent = nameInput.value;
    alert(nameInput.value);
});

//==================

const numberDisplay = document.getElementById("number");
const incrementButton = document.getElementById("btn-increment");
const decrementButton = document.getElementById("btn-decrement");
let number = 0;

incrementButton.addEventListener("click",function(){
    number++;
    numberDisplay.textContent = number;
});

decrementButton.addEventListener("click",function(){
    number--;
    numberDisplay.textContent = number; 
});

//====================

const backgroundDiv = document.getElementById("background");
const btnRed = document.getElementById('btn-red');
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');
const btnRandom = document.getElementById('btn-random');

btnRed.addEventListener("click", function () {
    backgroundDiv.style.backgroundColor = "red";
});
btnGreen.addEventListener("click", function () {
    backgroundDiv.style.backgroundColor = "green";
});
btnBlue.addEventListener("click", function () {
    backgroundDiv.style.backgroundColor = "blue";
});
btnRandom.addEventListener("click", function () {
    backgroundDiv.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)];
    }
  
  
    return color;
  }

  //==========================

  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoButton = document.getElementById("todo-button");
  const todoList = document.getElementById("todo-list");
  
  
  let todo = [];
  
  
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
  
    const todoText = todoInput.value;
  
  
    if (todoText !== "") {
      const todoItem = todoText;
      todo.push(todoItem);
      renderTodoItem(todoItem);
      todoInput.value = "";
    }
  
  
    function renderTodoItem(todoItem) {
      const list = document.createElement("li");
      list.textContent = todoItem;
      todoList.appendChild(list);
    }
  });
  
  
  
  

  