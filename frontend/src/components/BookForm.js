import { useState } from 'react';

const BookForm = () => {
  const [isbn_10, setIsbn_10] = useState('');
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState([]);
  const [publish_date, setPublish_date] = useState('');
  const [first_sentence, setFirst_sentence] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch book data from Open Library API
    try {
      const openLibraryURL = `https://openlibrary.org/isbn/${isbn_10}.json`;
      const response = await fetch(openLibraryURL);

      if (response.status === 200) {
        const data = await response.json();
        setTitle(data.title);
        setAuthors(['test']);
        setPublish_date(data.publish_date);
        setFirst_sentence(data.first_sentence);
        setError(null);

        // Post book data to the API endpoint
        const bookData = {
          isbn_10,
          title,
          authors,
          publish_date,
          first_sentence,
        };

        console.log(bookData);

        const postResponse = await fetch('/api/books', {
          method: 'POST',
          body: JSON.stringify(bookData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (postResponse.status === 201) {
          // Book successfully added
          // You can handle this as needed
        } else {
          // Handle post request error
          setError('Failed to add the book to your API.');
        }
      } else {
        setError('Failed to fetch data from Open Library');
      }
    } catch (error) {
      setError('An error occurred: ' + error.message);
    }
  };

  return (
    <form className='add-book-form' onSubmit={handleSubmit}>
      <h2>Add a Book</h2>
      <label htmlFor='isbn_10'>ISBN-10:</label>
      <input
        type='text'
        value={isbn_10}
        onChange={(e) => setIsbn_10(e.target.value)}
      />
      <button type='submit'>Add Book</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default BookForm;
