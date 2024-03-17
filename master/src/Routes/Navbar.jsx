import { Link } from "react-router-dom";
import { AllRoutes } from "./AllRoutes";

const Navbar= () =>{
    
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export {Navbar};