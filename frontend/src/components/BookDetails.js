const BookDetails = ({ book }) => {
    return (
        <div className="book-details">
            <h2>{book.title}</h2>
            <p>Authors: 
                {book.authors.map((author, idx) => (
                    // only include , if not last author
                    idx === book.authors.length - 1 
                        ? <small key={idx}> {author}</small> 
                        : <small key={idx}> {author}, </small>
                ))}
            </p>
        </div>
    );
};

export default BookDetails;