//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const MongoDatabase = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(MongoDatabase, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false,
  }, (err, res) => {
    if (err) { return console.log('Unable to insert To-do', err) }

    console.log(JSON.stringify(res.ops, undefined, 2))
  });*/

  /*db.collection('Users').insertOne({
    name: 'Hans',
    age: 23,
    location: 'Santiago, Chile',
  }, (err, res) => {
    if (err) { return console.log('Unable to insert User', err) }

    console.log(res.ops[0]._id.getTimestamp())
  });*/

  db.close();
});