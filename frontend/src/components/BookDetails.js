import React, { useState, useEffect } from 'react';

const BookDetails = ({ book }) => {
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);
    const imgSrc = `https://covers.openlibrary.org/b/isbn/${book.isbn_10}-M.jpg`;

  return (
    <div className="book-details">
        <h2>{book.title}</h2>
        <img src={imgSrc} alt={book.title} />
        <p>Title: {book.title}</p>
        <p>ISBN-10: {book.isbn_10}</p>
        <p>Authors: {book.authors}</p>
        <p>Published: {book.publish_date}</p>
        <p>Review: {book.review}</p>
        
    </div>
  );
};

export default BookDetails;
