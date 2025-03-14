const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS (for cross-origin access)
app.use(cors());

// Load JSON data
const pets = require('./pet.json');

// Define API route
app.get('/api/pets', (req, res) => {
    res.json(pets);
});

// Start the server
app.listen(port, () => {
    console.log(`pet API is running at http://localhost:${port}`);
});
