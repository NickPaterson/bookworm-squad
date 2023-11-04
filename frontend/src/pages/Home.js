import { useEffect, useState } from "react";

// Components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";

const Home = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
            const fetchBooks = async () => {
                const res = await fetch('/api/books');
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

export default Home;