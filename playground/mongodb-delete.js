//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const MongoDatabase = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(MongoDatabase, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  // deleteMany

  /*db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((res) => {
    console.log(res);
  });*/

  // deleteOne

  /*db.collection('Todos').deleteOne({text: 'Study'}).then((res) => {
    console.log(res);
  });*/

  // findOneAndDelete

  /*db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    console.log(res);
  });*/

  //db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("59ac35040126520606386cbe")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });


  db.close();
});