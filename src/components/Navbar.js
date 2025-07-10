import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    marginRight: '1rem',
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#282c34' }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/users" style={linkStyle}>Users</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
};

export default Navbar;
