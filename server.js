const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from your Vercel server!' });
});

module.exports = app;
