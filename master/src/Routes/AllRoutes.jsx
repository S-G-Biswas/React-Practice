import React from "react"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from "../Pages/Contact";


const AllRoutes = () =>{

    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
                </Routes>
            </Router>
        </div>

    )
}

export {AllRoutes};