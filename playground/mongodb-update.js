//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const MongoDatabase = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(MongoDatabase, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').findOneAndUpdate({
    _id : ObjectID('59acbdf5ad9dd9a98f17f362'),
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false,
  }).then((res) => {
    console.log(res);
  });*/

  db.collection('Users').findOneAndUpdate({
    _id : 123,
  }, {
    $set: {
      name: 'Hans Felipe',
    },
    $inc: {
      age: 1,
    }
  }, {
    returnOriginal: false,
  }).then((res) => {
    console.log(res);
  });



  db.close();
});