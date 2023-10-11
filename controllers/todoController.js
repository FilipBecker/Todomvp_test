const ToDo = require('../models/todo');

exports.getAllTodos = (req, res) => {
    res.json(ToDo.getAll());
};