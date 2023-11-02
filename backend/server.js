require('dotenv').config();

const express = require('express');

// Express app
const app = express();

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on port process.env.PORT');
});
