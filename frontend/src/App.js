import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Books from './pages/Books';
import Home from './pages/Home';
import Register from './pages/Register'; 
import Login from './pages/Login';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

import { NavbarWithSearch } from './components/NavbarWithSearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarWithSearch />
        
        <div className="pages"> 
  
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route  
              path="/register"
              element={<Register />}
            />
            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/books"
              element={<Books />}
            />

            <Route
              path="/add-book-review"
              element={<AddBook />}
            />

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route 
              path="/terms-and-conditions"
              element={<Terms />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
