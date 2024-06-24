import {useState, React} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import TableVersion from './components/TableVersion';
import InputVersion from './components/InputVersion';
import './App.css';

function App() {
  const [customPricingRules, setCustomPricingRules] = useState({
    A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
    B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
    C: { unitPrice: 20 },
    D: { unitPrice: 15 }
  });
  return (
    <body>
    <Router>
       <Header /> 
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<Home setCustomPricingRules={setCustomPricingRules} />} />
          <Route path="/table-version" element={<TableVersion customPricingRules={customPricingRules} />} />
          <Route path="/input-version" element={<InputVersion customPricingRules={customPricingRules} />} />
        </Routes>
      </div>
    </Router>
    </body>
  );
 
}

export default App;
