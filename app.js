//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listenters
todoButton.addEventListener('click', addTodo);


//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //Create Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
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
}
 