import { useState, React } from "react";

const pricingRules = {
  A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
  B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
  C: { unitPrice: 20 },
  D: { unitPrice: 15 },
};


const TableVersion = () => {
    const [scannedItems, setScannedItems] = useState({ A: 0, B: 0, C: 0, D: 0 });
    const [runningTotals, setRunningTotals] = useState({ A: 0, B: 0, C: 0, D: 0 });
    const [finalTotal, setFinalTotal] = useState(0);
  
    const scanItem = (item, increment) => {
      const newCount = scannedItems[item] + increment;
      if (newCount >= 0) {
        const newScannedItems = { ...scannedItems, [item]: newCount };
        setScannedItems(newScannedItems);
        updateRunningTotal(item, newCount);
      }
    };
  
    const updateRunningTotal = (item, count) => {
      const rule = pricingRules[item];
      let total = 0;
      if (rule.specialPrice) {
        const specialCount = Math.floor(count / rule.specialPrice.quantity);
        const regularCount = count % rule.specialPrice.quantity;
        total = specialCount * rule.specialPrice.price + regularCount * rule.unitPrice;
      } else {
        total = count * rule.unitPrice;
      }
      const newRunningTotals = { ...runningTotals, [item]: total };
      setRunningTotals(newRunningTotals);
      updateFinalTotal(newRunningTotals);
    };
  
    const updateFinalTotal = (runningTotals) => {
      let total = 0;
      for (let item in runningTotals) {
        total += runningTotals[item];
      }
      setFinalTotal(total);
    };
  
    const formatPrice = (price) => {
      if (price >= 100) {
        return `£${(price / 100).toFixed(2)}`; // Convert pence to pounds and pence format
      } else {
        return `${price}p`; // Display in pence if less than 100 pence
      }
    };
  
    return (
      <div>
        <h2>Table Version</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Running Costs</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(pricingRules).map((item) => (
              <tr key={item}>
                <th scope="row">{item}</th>
                <td>
                  {pricingRules[item].specialPrice ? (
                    <div>
                      <p>{`${formatPrice(pricingRules[item].unitPrice)} (${pricingRules[item].specialPrice.quantity} for ${formatPrice(pricingRules[item].specialPrice.price)})`}</p>
                    </div>
                  ) : (
                    formatPrice(pricingRules[item].unitPrice)
                  )}
                  <button onClick={() => scanItem(item, 1)}>Add to basket</button>
                </td>
                <td>
                  <button onClick={() => scanItem(item, -1)}>-</button>
                  {runningTotals[item]}
                  <button onClick={() => scanItem(item, 1)}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan="2">
                Final total
              </th>
              <td>{formatPrice(finalTotal)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };

export default TableVersion;
