const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

try {
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/TodoApp'); //com heroku add-on ou local
} catch(e) {
    mongoose.connect('mongodb://fernanda:fernanda@ds161873.mlab.com:61873/node-todo-api'); //mLab direto
}



//mongoose.connect('mongodb://fernanda:fernanda@ds161873.mlab.com:61873/node-todo-api'); //com mLab direto

module.exports = {mongoose};