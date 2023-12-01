require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const booksRoutes = require('./routes/bookRoutes');
const port = process.env.PORT || 4000;
const path = require('path');

// Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/books', booksRoutes);

// production
app.use(express.static('frontend/build'));
app.get("*", (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));

});

// Exit the application if MongoDB URI is not defined
if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI environment variable is not defined.');
    process.exit(1); 
}

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        // Listen to port
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
        
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit the application if MongoDB connection fails
    });


