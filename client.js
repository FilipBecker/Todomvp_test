const API_URL = 'http://localhost:4242/todos';

window.onload = function() {
    fetchTodos();
};

function fetchTodos() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayTodos(data);
        });
}

function displayTodos(todos) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.description;
        li.setAttribute('data-id', todo.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteTodo(todo.id);
        };
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById('todoInput');
    const description = input.value;
    input.value = '';

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            description: description,
        }),
    })
    .then(response => response.json())
    .then(data => {
        fetchTodos();
    });
}

function deleteTodo(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        fetchTodos();
    });
}
