// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <div className='homepage-display'>
        <div>
            <form>
                
            </form>
        </div>
      <h2>Before you are two paths. Which will you choose?</h2>
      <div className='button-container'>
        <Link to="/table-version">
          <button className='homepage-buttons'>Table Version</button>
        </Link>
        <Link to="/input-version">
          <button className='homepage-buttons'>Text Input Version</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;