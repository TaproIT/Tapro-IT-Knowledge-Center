const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');  // Optional for JWT

const app = express();
app.use(cors());  // Enable CORS for all requests
app.use(bodyParser.json());  // Parse incoming JSON data


const users = [
  { id: 1, email: 'shanka@taproit.com', password: 'shanka@taproit' },
  { id: 2, email: 'tharushi@taproit.com', password: 'tharushi@taproit' }
];

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
