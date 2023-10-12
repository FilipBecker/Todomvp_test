const ToDo = require('../models/todo');

exports.getAllTodos = (req, res) => {
    res.json(ToDo.getAll());
};

exports.getTodoById = (req, res) => {
    const todo = ToDo.getById(req.params.id);
    if(todo)
        res.json(todo);
    else
        res.status(404).json({error: 'not found'});
};