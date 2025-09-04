// 6-http_express.js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.listen(1245);

export default app;
