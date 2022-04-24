const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo => {
        addTodo(todo)
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo(); 
});

function addTodo(todo) {
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    } 

    if(todoText){
        const todoE1 = document.createElement('li');
        if(todo && todo.complated) {
            todoE1.classList.add('complated')
        }

        todoE1.innerText = todoText;

        todoE1.addEventListener('click', () => {
            todoE1.classList.toggle('complated')

            updateLs();
        });

        todoE1.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoE1.remove();

            updateLs();

        });

        todosUL.appendChild(todoE1);

        input.value = "";

        updateLs();
    };

};


function updateLs() {
    const todosE1 = document.querySelectorAll('li');

    const todos = [];

    todosE1.forEach(todosE1 => {
        todos.push({
            text: todosE1.innerText,
            complated: todosE1.classList.contains('complated')
        })
    });

    localStorage.setItem('todos', JSON.stringify(todos));

};
