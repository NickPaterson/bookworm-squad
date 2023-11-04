const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
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
    first_sentence: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
