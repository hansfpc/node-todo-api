//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const MongoDatabase = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(MongoDatabase, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').find({
    _id: new ObjectID('59ac2d03730cd305230b6f09')
  }).toArray().then( (docs) => {
    console.log('******  Todos  ******');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch To-dos', err)
  });*/

  db.collection('Todos').find({
    _id: new ObjectID('59ac2d03730cd305230b6f09')
  }).count().then( (count) => {
    console.log(`Todos Count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch To-dos', err)
  });

  db.close();
});