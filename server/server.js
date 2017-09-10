const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/Todo');
const { User } = require('./models/User');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/todos', (req, res) => {
  //console.log(req.body);
  let todo = new Todo({
    text: req.body.text,
  });
  todo.save().then((doc) => {
    res.status(200).send(doc)
  }, (e) =>{
    res.status(400).send(e)
  });

});

app.listen(3000, () => {
  console.log('App running on port 3000');
});