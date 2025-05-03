const serverless = require('serverless-http');  // Import serverless-http
const app = require('../server');  // Import the Express app from server.js

module.exports = serverless(app);  // Convert the Express app to a serverless function
