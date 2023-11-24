import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BooksContextProvider } from './context/BookContext'; 
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
