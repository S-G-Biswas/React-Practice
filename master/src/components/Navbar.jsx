import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';


 function Navbar(){

    return (
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
    
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      );

 }

 export default Navbar;