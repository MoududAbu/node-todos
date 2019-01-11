const Todos = require('../models/todoModels');
const bodyParser = require('body-parser');

module.exports = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', () => {

        app.get('/app/todos/:uname', (req, res) => {
            const uname = req.params;

            Todos.find({ username: uname }, (err, todos) => {
                if (err) throw err;

                res.send(todos);
            });
        });

    });

    app.get('/app/todos/:id', (req, res) => {
        const id = req.params;

        Todos.findById({ _id: id }, (err, todos) => {
            if (err) throw err;

            res.send(todos);
        });
    });

    app.post('/app/todo', (req, res) => {
        const { id, isDone, todo, hasAttachment } = req.body;
        const newTodo = {
            todo,
            hasAttachment,
            isDone,
        }

        if (id) {
            Todos.findByIdAndUpdate(id, newTodo, (err, todo) => {
                if (err) throw err;

                res.send('Success');
            });
        } else {
            const newTodoModel = Todos(newTodo);
            newTodoModel.save();

            res.send('Success');
        }
    });

    app.delete('/app/todo', (req, res) => {
        const { id } = req.body;

        if (id) {
            Todos.findByIdAndDelete(id, (err, res) => {
                if (err) throw err;

                res.send('Success');
            });
        }
    });
}