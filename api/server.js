const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

// Basic Auth Middleware
app.use(basicAuth({
    users: { 'Nandita': 'bithday21' },
    challenge: true,
}));

// Serve static files from public (now should use path to /public)
app.use(express.static(path.join(__dirname, '../public')));

// Fallback to index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports.handler = serverless(app);
