import { useState, React } from "react";

const pricingRules = {
  A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
  B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
  C: { unitPrice: 20 },
  D: { unitPrice: 15 },
};

const TableVersion = () => {
  const [itemsInBasket, setItemsInBasket] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const [runningTotals, setRunningTotals] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  });
  const [finalTotal, setFinalTotal] = useState(0);

  const scanItem = (item, increment) => {
    const newCount = itemsInBasket[item] + increment;
    if (newCount >= 0) {
      const newItemsInBasket = { ...itemsInBasket, [item]: newCount };
      setItemsInBasket(newItemsInBasket);
      updateRunningTotal(item, newCount);
    }
  };

  const updateRunningTotal = (item, count) => {
    const rule = pricingRules[item];
    let total = 0;
    if (rule.specialPrice) {
      const specialCount = Math.floor(count / rule.specialPrice.quantity);
      const regularCount = count % rule.specialPrice.quantity;
      total =
        specialCount * rule.specialPrice.price + regularCount * rule.unitPrice;
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
      return `£${(price / 100).toFixed(2)}`;
    } else {
      return `${price}p`;
    }
  };

  return (
    <div>
      <h2 className="table-version-heading">Table Version</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
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
                      <p>{`${formatPrice(pricingRules[item].unitPrice)} (${
                        pricingRules[item].specialPrice.quantity
                      } for ${formatPrice(
                        pricingRules[item].specialPrice.price
                      )})`}</p>
                    </div>
                  ) : (
                    formatPrice(pricingRules[item].unitPrice)
                  )}
                  <button onClick={() => scanItem(item, 1)}>
                    Add to basket
                  </button>
                </td>
                <td>
                  <button
                    className="amount-buttons"
                    onClick={() => scanItem(item, -1)}
                  >
                    -
                  </button>
                  {itemsInBasket[item]}
                  <button
                    className="amount-buttons"
                    onClick={() => scanItem(item, 1)}
                  >
                    +
                  </button>
                </td>
                <td>{formatPrice(runningTotals[item])}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan="2">
                Final total
              </th>
              <td></td>
              <td>{formatPrice(finalTotal)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TableVersion;
