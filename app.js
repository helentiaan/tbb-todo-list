//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('#filter-todo');

//event listenters
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //Create Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add to local storeage
    saveLocalTodos(todoInput.value);
    //Button check mark
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Button trush mark
    const trushButton = document.createElement('button');
    trushButton.innerHTML = '<i class="fas fa-trash"></i>';
    trushButton.classList.add("trash-btn");
    todoDiv.appendChild(trushButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear todoInput
    todoInput.value="";
}

function deleteCheck(e){
    const item = e.target;
    //delete
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    //check
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo){
    //check duplicate
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    } else {
        //already have, parse back
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
 
function getTodos(){
    //check duplicate
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    } else {
        //already have, parse back
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        //Create Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //Create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //Button check mark
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //Button trush mark
        const trushButton = document.createElement('button');
        trushButton.innerHTML = '<i class="fas fa-trash"></i>';
        trushButton.classList.add("trash-btn");
        todoDiv.appendChild(trushButton);
        //Append to list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    //check duplicate
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    } else {
        //already have, parse back
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    //first para is the start index, second is the length, splice like erase
    todos.splice(todos.indexOf(todoInput),1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
