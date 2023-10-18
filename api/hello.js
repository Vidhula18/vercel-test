// api/hello.js

// This is a basic serverless function that responds with a JSON message.
module.exports = (req, res) => {
    res.status(200).json({ message: 'Hello from Vercel!' });
  };
  