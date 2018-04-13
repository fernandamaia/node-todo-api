const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/TodoApp' || 'mongodb://fernanda:fernanda@ds161873.mlab.com:61873/node-todo-api'); //com heroku add-on


//mongoose.connect('mongodb://fernanda:fernanda@ds161873.mlab.com:61873/node-todo-api'); //com mLab direto

module.exports = {mongoose};