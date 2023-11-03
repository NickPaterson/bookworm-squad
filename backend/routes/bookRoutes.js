const express = require('express');
const { 
    createBook,
    getAllBooks,
    getSingleBook,
    deleteBook,
    updateBook 
} = require('../controllers/bookController');

const router = express.Router();

// GET all books
router.get('/', getAllBooks);

// GET a single book
router.get('/:id', getSingleBook);

// POST a book
router.post('/', createBook);

// DELETE a book
router.delete('/:id', deleteBook);

// UPDATE a book
router.patch('/:id', updateBook);

module.exports = router;