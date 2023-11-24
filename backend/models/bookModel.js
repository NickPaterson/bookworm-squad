const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        isbn_10: {
            type: String,
            unqiue: true,
        },
        title: {
            type: String,
            required: true
        },
        authors: {
            type: Array
        },
        publish_date: {
            type: String
        },
        review: {
            type: String
        }
    }, { timestamps: true }
);   

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
