import React from 'react';
import BookForm from '../components/BookForm';

const AddBook = () => {
    return (
        <>
        <div className='mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4'>
            <div className="container mx-auto flex flex-wrap justify-center text-blue-gray-900">
                <BookForm />
            </div>
        </div>
        </>
    );
}

export default AddBook;