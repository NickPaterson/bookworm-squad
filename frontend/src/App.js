import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Home from './pages/Home';
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
              path="/books" 
              element={<Books />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
