const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.send('pong');
});

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
})

module.exports = app;