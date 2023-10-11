let todos = [{'id': '1','description': 'Task 1'}];

class ToDo {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }

    static getAll() {
        return todos;
    }

    static add(todo){
        todos.push(todo);
    }
}

module.exports = ToDo;