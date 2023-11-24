import { BooksContext } from "../context/BookContext";
import { useContext } from "react";

export const useBooksContext = () => {
    const context = useContext(BooksContext);
    if (!context) {
        throw new Error('useBooksContext must be used within a BooksContextProvider');
    }
    return context;
};