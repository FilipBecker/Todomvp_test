const Todo = require('../models/todo');

describe('Todo Model', () => {

    it('should get all todos', () => {
        expect(Todo.getAll().length).toBe(1);
    });

    it('should add a todo', () => {
        const todo = new Todo('2', 'Test todo');
        Todo.add(todo);

        expect(Todo.getAll().length).toBe(2);
    });

    it('should get a todo by id', () => {
        const todo = new Todo('2', 'Another test todo');
        Todo.add(todo);

        const fetchedTodo = Todo.getById('2');
        expect(fetchedTodo).toEqual(todo);
    });

});
