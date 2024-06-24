const { formatPrice, calculateTotal, pricingRules } = require('./utils');

test('correctly converts numbers to a pounds and pence format', () => {
  expect(formatPrice(112)).toBe('£1.12'); 
  expect(formatPrice(99)).toBe('99p')
  expect(formatPrice(234)).toBe('£2.34')
  expect(formatPrice(545)).toBe('£5.45'); 
  expect(formatPrice(1)).toBe('1p'); 
});

test('calculates the total price correctly', () => {
    const items = {A: 1, B: 1, C: 1, D: 1}
    expect(calculateTotal(items)).toBe('£1.15')
})
