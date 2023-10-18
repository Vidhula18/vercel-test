const express = require('express');
const app = express();
const port = 3000; // You can use any port you like

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
