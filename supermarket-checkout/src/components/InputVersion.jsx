import {useState, React} from 'react';
const pricingRules = {
    A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
    B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
    C: { unitPrice: 20 },
    D: { unitPrice: 15 }
  };


const InputVersion = () => {
    const [scannedItems, setScannedItems] = useState({});
    const [runningTotal, setRunningTotal] = useState(0);
    const [finalTotal, setFinalTotal] = useState(0);
    const [input, setInput] = useState('');
  
    const scanItem = (item) => {
      const upperCaseItem = item.toUpperCase();
      if (!pricingRules[upperCaseItem]) {
        alert(`Item ${upperCaseItem} not found.`);
        return;
      }
      const newScannedItems = { ...scannedItems, [upperCaseItem]: (scannedItems[upperCaseItem] || 0) + 1 };
      setScannedItems(newScannedItems);
      const newTotal = calculateTotal(newScannedItems);
      setRunningTotal(newTotal);
    };
  
    const calculateTotal = (items) => {
      let total = 0;
      for (let item in items) {
        let count = items[item];
        let rule = pricingRules[item];
  
        if (rule.specialPrice) {
          let specialCount = Math.floor(count / rule.specialPrice.quantity);
          let regularCount = count % rule.specialPrice.quantity;
          total += specialCount * rule.specialPrice.price + regularCount * rule.unitPrice;
        } else {
          total += count * rule.unitPrice;
        }
      }
      return total;
    };
  
    const handleScan = () => {
    
        scanItem(input.trim());
      
      setInput('');
    };
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
  
    const resetAll = () => {
      setScannedItems({});
      setRunningTotal(0);
      setFinalTotal(0);
      setInput('');
    };

    const formatPrice = (price) => {
        if (price >= 100) {
          return `£${(price / 100).toFixed(2)}`;
        } else {
          return `${price}p`;
        }
      };
  
    return (
      <div className="container">
        <h2>Input Version</h2>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Scan item (A, B, C, D)"
        />
        <button onClick={handleScan}>Scan</button>
        <h3>Running Total: {formatPrice(runningTotal)}</h3>
        <button onClick={() => setFinalTotal(runningTotal)}>Get Final Total</button>
        <h2>Final Total: {formatPrice(finalTotal)}</h2>
        <button onClick={resetAll} style={{ marginTop: '10px', backgroundColor: '#dc3545' }}>Reset</button>
      </div>
    );
};

export default InputVersion;