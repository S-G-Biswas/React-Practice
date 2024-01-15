import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../app/store";
function Navbar() {
  const { cart } = useSelector((state: State) => state);
  return (
    <nav>
      <h1>Masai TS E-Commerce</h1>
      <div className="options">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          Cart -{" "}
          <span id="cart-count">
            {/* Show No Of Cart Products here  */}
            {cart.length ? cart.length : "0"}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
