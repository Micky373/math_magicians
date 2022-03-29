import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Math Magician</h1>
    <ul className="nav_links">
      <Link to="/"><li>Home</li></Link>
      <Link to="/Calculator"><li>Calculator</li></Link>
      <Link to="/Quotes"><li>Quotes</li></Link>
    </ul>
  </nav>
);

export default Navbar;
