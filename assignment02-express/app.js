const express = require('express');

const app = express();

app.use('/users', (req, res) => {
  console.log("/users request middleware");
  res.send('Hello from users');
});

app.use('/', (req, res) => {
  console.log("/ request middleware");
  res.send('Hello from Express');
});

app.listen(3000,() => {
  console.log('Server is running');
})