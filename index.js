// index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js backend!');
});

// Example POST route
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received successfully!', data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

