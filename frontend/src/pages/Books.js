import { useEffect, useState } from "react";

// Components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";

const Books = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
            const fetchBooks = async () => {
                const res = await fetch('https://bookwormbackend-nickpaterson.cloud.okteto.net/api/books/api/books/');
                const json = await res.json();

                if (res.ok) {
                    setBooks(json);
                }
            };
            fetchBooks();
        }, []);

        return (
            <div className="home">
                <div className="books">
                    {books && books.map(book => (
                        <BookDetails 
                            key={book._id}
                            book={book}
                        />
                    ))}
                </div>
                <BookForm />
            </div>
        );
 };

export default Books;