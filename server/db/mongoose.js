const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://fernanda:fernanda@ds161873.mlab.com:61873/node-todo-api');

module.exports = {mongoose};