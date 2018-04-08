import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());

app.use(express.static('dist'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))

});

app.get('/users', function (req, res) {
  // hard coding for simplicity. pretend this hits a real database
  res.json([
    { "id": 1, "firstName": "Benoy", "lastName": "John", "email": "benoyjohn@gamestop.com" },
    { "id": 2, "firstName": "JD", "lastName": "Williams", "email": "bobee@gmail.com" },
    { "id": 3, "firstName": "Darth", "lastName": "Vader", "email": "DV@starwars.com" }
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);

  } else {
    open('http://localhost:' + port);
  }
});
