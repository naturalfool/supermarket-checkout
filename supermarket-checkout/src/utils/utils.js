  
  const formatPrice = (price) => {
    if (price >= 100) {
      return `£${(price / 100).toFixed(2)}`;
    } else {
      return `${price}p`;
    }
  };
  

  const pricingRules = {
    A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
    B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
    C: { unitPrice: 20 },
    D: { unitPrice: 15 }
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
    return formatPrice(total);
  };
  module.exports = { formatPrice, calculateTotal, pricingRules };