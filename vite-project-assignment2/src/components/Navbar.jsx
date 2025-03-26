import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyLibrary</h2>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/books/Fiction" className="nav-link">Browse Books</NavLink>
        <NavLink to="/add-book" className="nav-link">Add Book</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
