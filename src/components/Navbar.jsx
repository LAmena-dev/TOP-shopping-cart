import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      Navbar
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
