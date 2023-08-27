const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the current directory
app.use(express.static(__dirname));

// Set up middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Empty array to store registered users
const registeredUsers = [];

// Route for the register form
app.get('/registerForm', (req, res) => {
  res.sendFile(path.join(__dirname, 'registerForm.html'));
});

// Route for the login form
app.get('/loginForm', (req, res) => {
  res.sendFile(path.join(__dirname, 'loginForm.html'));
});

// Route for user registration
app.post('/register', (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  // Check if the username already exists
  const existingUser = registeredUsers.find(user => user.username === username);
  if (existingUser) {
    res.send('Username already exists');
    return;
  }

  // Create a new user object
  //ID starts from 1 and increments by 1 for each new user.
  const user = { id: registeredUsers.length + 1, name, lastName, email, username, password };

  // Add the user to the registeredUsers array
  registeredUsers.push(user);

  res.send('Hello! Your account is now created!');
});

// Route for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = registeredUsers.find(user => user.username === username);

  // Check if the user exists and the password matches
  if (!user || user.password !== password) {
    res.send('Username is not registered');
    return;
  }

  res.send(`Hi ${user.username}, welcome back again!`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});