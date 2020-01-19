import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1 >
        <Link to="/" className="flex align-center">
          <i className="fas fa-book-open fa-2x mr-1"></i>
          {' '}Book App
        </Link>
      </h1>
      <ul className="nav-links">
        <li>
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search"></i>
        </li>
        <li ><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
