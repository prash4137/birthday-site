const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();

// Basic Auth Middleware
app.use(basicAuth({
  users: { 'Nandita': 'bithday21' },
  challenge: true,
}));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
