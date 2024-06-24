import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/"><div className='header'>
     <Link to="/"> <h1>Josh's Really Good Supermarket Checkout</h1></Link>

    </div> </Link>
  );
};

export default Header;