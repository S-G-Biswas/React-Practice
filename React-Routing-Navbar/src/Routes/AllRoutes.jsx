import React from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
// import Services from '../Pages/services';

const AllRoutes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    {/* <Route path="/services" element={<Services />} /> */}
                </Routes>
           </Router>
      </div>
    )
}

export {AllRoutes}