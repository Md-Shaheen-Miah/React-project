
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'

const Navbar = () => {
  return (
    <nav className="navbarr">
      <div className="navbar-logo">
        <Link to="/">Hotel Management</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Bookings</Link>
        </li>
        <li>
          <Link to="/Room">Rooms</Link>
        </li>
        <li>
          <Link to="/Book">Guest</Link>
        </li>
        <li>
          <Link to="/Staff">Staff</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
