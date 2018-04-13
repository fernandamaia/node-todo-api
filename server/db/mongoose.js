const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/TodoApp'); //com heroku add-on ou local
//mongoose.connect('mongodb://fernanda:fernanda@ds161873.mlab.com:61873/node-todo-api'); //mLab direto


module.exports = {mongoose};