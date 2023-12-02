import React, { useEffect, useState } from 'react';
import ReviewCard from '../components/Card';
import BookForm from '../components/BookForm';
import { useBooksContext } from '../hooks/useBooksContext';

import { Button, Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";


const Home = () => {
    const { books, dispatch } = useBooksContext();

    const [openAccordian, setOpenAccordian] = useState(false);

    const handleOpen = (value) => setOpenAccordian(openAccordian === value ? 0 : value);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // const response = await fetch('/api/books');
                const response = await fetch('https://bookwormbackend-nickpaterson.cloud.okteto.net/api/books');
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_BOOKS', payload: json })
                }
            }
            catch (error) {
                console.error(error);
            }
        }

        fetchBooks();
    }, [dispatch]);

    return (
        <>
        <div className="home-hero">
            <a href='/register'>
                <Button color="white" className="mt-6 w-48">Sign Up</Button>
            </a>
           
        </div>
             
        <div className='mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4'>
            <div className="container mx-auto flex flex-wrap justify-between text-blue-gray-900">

            <Accordion open={openAccordian === 1} className='mb-10'>
                <AccordionHeader color="black" ripple="light" onClick={() => handleOpen(1)}>
                    <div className="flex items-center justify-between">
                        <h6 className="mb-0 text-blue-gray-900 text-xl font-normal">
                            Add Book Review
                        </h6>
                        <i className="material-icons">▼</i>
                    </div>
                </AccordionHeader>
                <AccordionBody>
                    <div className='mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4'>
                    <div className="container mx-auto flex flex-wrap justify-center text-blue-gray-900">
                        <BookForm />
                    </div>
                    </div>
                </AccordionBody>
            </Accordion>

            {books && books.map((book) => (
                <ReviewCard key={book._id} book={book}/>
            ))}
            
            </div>
            
        </div> 
        
        </>
    );
};

export default Home;