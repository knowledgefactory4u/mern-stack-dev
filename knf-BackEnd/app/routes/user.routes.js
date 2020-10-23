module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/users', users.create);

    // Retrieve all Notes
    app.get('/users', users.findAll);

    // Retrieve a single Note with noteId
    app.get('/users/:id', users.findOne);

    // Update a Note with noteId
    app.put('/users/:id', users.update);

    // Delete a Note with noteId
   // app.delete('/users/:id', notes.delete);
    // Delete a Note with noteId
    app.delete('/users/:id', users.delete);
}