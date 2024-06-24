import {React, useState} from 'react';

function CustomPriceInputForm ({customRules, setCustomRules, setCustomPricingRules}) {
    const handleInputChange = (e, item, field) => {
        const value = parseInt(e.target.value, 10);
        setCustomRules((prevRules) => ({
          ...prevRules,
          [item]: {
            ...prevRules[item],
            [field]: value,
          },
        }));
      };
    
      const handleSpecialPriceChange = (e, item, field) => {
        const value = parseInt(e.target.value, 10);
        setCustomRules((prevRules) => ({
          ...prevRules,
          [item]: {
            ...prevRules[item],
            specialPrice: {
              ...prevRules[item].specialPrice,
              [field]: value,
            },
          },
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setCustomPricingRules(customRules);
      };
return (
    <div className='price-input-form'>
      <h2>Set Custom Prices:</h2>
      <form>
        {Object.keys(customRules).map((item) => (
          <div key={item} className="form-field">
            <h3>Item {item}</h3>
            <label>
              Unit Price (pence):
              <input
                type="number"
                value={customRules[item].unitPrice}
                onChange={(e) => handleInputChange(e, item, 'unitPrice')}
                required
              />
            </label>
            {customRules[item].specialPrice (
              <>
                <label>
                  Special Quantity:
                  <input
                    type="number"
                    value={customRules[item].specialPrice.quantity}
                    onChange={(e) => handleSpecialPriceChange(e, item, 'quantity')}
                  />
                </label>
                <label>
                  Special Price (pence):
                  <input
                    type="number"
                    value={customRules[item].specialPrice.price}
                    onChange={(e) => handleSpecialPriceChange(e, item, 'price')}
                  />
                </label>
              </>
            )}
          </div>
        ))}
        <button onClick={handleSubmit} type="submit">Set prices</button>
      </form>
    </div>
)

}


export default CustomPriceInputForm