const Book = require('../models/bookModel');
const mongoose = require('mongoose');

// GET all books
const getAllBooks = async (req, res) => {
    const books = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json(books)
};

// GET a single book
const getSingleBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Book not found' });
    } 
    const book = await Book.findById(id);
    
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    } else {
        res.status(200).json(book);
    }
};

// CREATE a book
const createBook = async (req, res) => {
    const { isbn_10, title, authors, publish_date, review  } = req.body;

    // Add json to database
    try {
        const book = await Book.create({ isbn_10, title, authors, publish_date, review });
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};

// DELETE a book
const deleteBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Book not found' });
    } 
    const book = await Book.findOneAndDelete({ _id: id });
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    } else {
        res.status(200).json({ message: 'Book deleted successfully' });
    }   
};


// UPDATE a book
const updateBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Book not found' });
    } 

    const book = await Book.findOneAndUpdate({ _id: id}, {
        ...req.body
    });

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    } else {
        res.status(200).json(book);
    }   
};


module.exports = {
    createBook,
    getAllBooks,
    getSingleBook,
    deleteBook,
    updateBook
};