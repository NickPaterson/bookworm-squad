require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/bookRoutes');
const port = process.env.PORT || 4000;
const path = require('path');

// Express app
const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/books', booksRoutes);

// production
app.use(express.static('frontend/build'));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        // Listen to port
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
        
    })
    .catch(err => console.log(err));


