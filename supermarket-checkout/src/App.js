import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import TableVersion from './components/TableVersion';
import InputVersion from './components/InputVersion';
import './App.css';

function App() {

  return (
    <body>
    <Router>
       <Header /> 
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table-version" element={<TableVersion />} />
          <Route path="/input-version" element={<InputVersion />} />
        </Routes>
      </div>
    </Router>
    </body>
  );
 
}

export default App;
