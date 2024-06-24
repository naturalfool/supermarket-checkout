import { useState, React } from "react";
import Table from "./Table";

const TableVersion = ({ customPricingRules }) => {
  const [itemsInBasket, setItemsInBasket] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  });
  const [runningTotals, setRunningTotals] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  });
  const [finalTotal, setFinalTotal] = useState(0);

  const addItemToBasket = (item, increment) => {
    const newCount = itemsInBasket[item] + increment;
    if (newCount >= 0) {
      const newItemsInBasket = { ...itemsInBasket, [item]: newCount };
      setItemsInBasket(newItemsInBasket);
      updateRunningTotal(item, newCount);
    }
  };

  const updateRunningTotal = (item, count) => {
    const rule = customPricingRules[item];
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
        <Table
          customPricingRules={customPricingRules}
          formatPrice={formatPrice}
          addItemToBasket={addItemToBasket}
          itemsInBasket={itemsInBasket}
          runningTotals={runningTotals}
          finalTotal={finalTotal}
        />
      </div>
    </div>
  );
};

export default TableVersion;
