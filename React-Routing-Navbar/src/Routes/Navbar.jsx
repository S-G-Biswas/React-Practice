import {Link} from "react-router-dom";

function Navbar() {
    return(
        <div className = "navbar" >
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/products">Products</Link>
                <Link to="/products">Services</Link>
                <Link to="/serices">Services</Link>
            </nav>
        </div>
    )
}

export { Navbar }