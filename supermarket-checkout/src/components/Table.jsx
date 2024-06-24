import React from "react"

function Table ({customPricingRules, formatPrice, addItemToBasket, itemsInBasket, runningTotals, finalTotal}) {
return (
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
            {Object.keys(customPricingRules).map((item) => (
              <tr key={item}>
                <th scope="row">{item}</th>
                <td>
                  {customPricingRules[item].specialPrice ? (
                    <div>
                      <p>{`${formatPrice(customPricingRules[item].unitPrice)} (${
                        customPricingRules[item].specialPrice.quantity
                      } for ${formatPrice(
                        customPricingRules[item].specialPrice.price
                      )})`}</p>
                    </div>
                  ) : (
                    formatPrice(customPricingRules[item].unitPrice)
                  )}
                  <button onClick={() => addItemToBasket(item, 1)}>
                    Add to basket
                  </button>
                </td>
                <td>
                  <button
                    className="amount-buttons"
                    onClick={() => addItemToBasket(item, -1)}
                  >
                    -
                  </button>
                  {itemsInBasket[item]}
                  <button
                    className="amount-buttons"
                    onClick={() => addItemToBasket(item, 1)}
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
)
}

export default Table