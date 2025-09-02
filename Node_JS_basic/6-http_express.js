// 6-http_express.js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;

