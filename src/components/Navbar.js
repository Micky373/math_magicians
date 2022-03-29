import React from 'react';
import { Link } from 'react-router-dom';

const HeaderStyle = {
  color: '#b6ad90',
};

const Navbar = () => (
  <nav>
    <h1 style={HeaderStyle}>Math Magician</h1>
    <ul className="nav_links">
      <Link to="/"><li>Home</li></Link>
      <Link to="/Calculator"><li>Calculator</li></Link>
      <Link to="/Quotes"><li>Quotes</li></Link>
    </ul>
  </nav>
);

export default Navbar;
