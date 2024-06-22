import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Supermarket Checkout App</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Header;