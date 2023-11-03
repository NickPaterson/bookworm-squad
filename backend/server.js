require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/bookRoutes');

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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        // Listen to port
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    })
    .catch(err => console.log(err));


