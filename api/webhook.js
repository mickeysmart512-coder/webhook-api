
const express = require('express');
const app = express();

app.use(express.json());

// Handle POST requests to /api/webhook
app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body); // Log the received webhook payload
    res.status(200).send('User wallet updated successfully.');
});

// Optional: Handle GET requests for testing
app.get('/webhook', (req, res) => {
    console.log('GET request to /api/webhook'); // Log GET request
    res.status(200).send('GET request to /api/webhook received.');
});

module.exports = app;

