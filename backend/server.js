const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, (req,res) => {
  console.log("hello world!");
});