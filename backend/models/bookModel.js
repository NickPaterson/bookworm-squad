const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String
    },
    isbn_10: {
        type: String
    },
    isbn_13: {
        type: String
    },
    authors: [String]
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
