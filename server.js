const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic Auth Middleware
app.use(basicAuth({
    users: { 'Nandita': 'bithday21' },
    challenge: true,
}));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
