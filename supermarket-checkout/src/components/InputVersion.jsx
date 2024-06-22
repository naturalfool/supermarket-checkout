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
      const upperItem = item.toUpperCase();
      if (!pricingRules[upperItem]) {
        alert(`Item ${upperItem} not found in pricing rules.`);
        return;
      }
      const newScannedItems = { ...scannedItems, [upperItem]: (scannedItems[upperItem] || 0) + 1 };
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
      if (input.toLowerCase() === 'total') {
        setFinalTotal(runningTotal);
      } else {
        scanItem(input.trim());
      }
      setInput('');
    };
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleScan();
      }
    };
  
    const resetAll = () => {
      setScannedItems({});
      setRunningTotal(0);
      setFinalTotal(0);
      setInput('');
    };
  
    return (
      <div className="container">
        <h1>Supermarket Checkout</h1>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Scan item (A, B, C, D) or type 'total'"
        />
        <button onClick={handleScan}>Scan</button>
        <h2>Running Total: £{(runningTotal / 100).toFixed(2)}</h2>
        <button onClick={() => setFinalTotal(runningTotal)}>Get Final Total</button>
        <h2>Final Total: £{(finalTotal / 100).toFixed(2)}</h2>
        <button onClick={resetAll} style={{ marginTop: '10px', backgroundColor: '#dc3545' }}>Reset</button>
      </div>
    );
};

export default InputVersion;