// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Supermarket Checkout App</h2>
      <div>
        <Link to="/table-version">
          <button>Table Version</button>
        </Link>
        <Link to="/input-version">
          <button>Input Version</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;