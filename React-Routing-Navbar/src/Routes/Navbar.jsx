import {Link} from "react-router-dom";

function Navbar() {
    return(
        <div className = "navbar" >
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/products">Products</Link>
            </nav>
        </div>
    )
}

export { Navbar }