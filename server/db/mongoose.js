const mongoose = require('mongoose');
const MongoDatabase = 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(MongoDatabase);

module.exports = { mongoose };