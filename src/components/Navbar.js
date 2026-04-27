import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/progress">Progress</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;