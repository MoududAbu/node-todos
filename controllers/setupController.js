const Todos = require('../models/todoModels');

module.exports = (app) => {


    app.get('/api/setupTodos', (req, res) => {

        const starterTodos = [
            {
                username: 'test',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed Dog',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, (err, results) => {
            res.send(results);
        });

    });

};
