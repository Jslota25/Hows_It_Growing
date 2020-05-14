// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
      res.json('route hit')
    // findAll returns all entries for a table when used with no options
    // db.Todo.findAll({}).then(function(dbTodo) {
    //   // We have access to the todos as an argument inside of the callback function
    //   res.json(dbTodo);
    // });
  });

  // ----------Testing route for creating new user.------------ (works through postman)
  app.post('/api/users', function(req, res) {
    db.user.create({
      emailAddress: req.body.email,
      password: req.body.password
    })
    .then(function() {
      res.json('new user created');
    })
  });
};