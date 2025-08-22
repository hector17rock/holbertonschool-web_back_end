import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

console.log('=== Testing Pricing Class ===\n');

// Test 1: Basic creation and display
console.log('1. Testing basic pricing creation:');
const euro = new Currency('EUR', 'Euro');
const pricing1 = new Pricing(100, euro);
console.log(`Pricing object:`, pricing1);
console.log(`Display full price: ${pricing1.displayFullPrice()}`);
console.log('');

// Test 2: Testing getters and setters
console.log('2. Testing getters and setters:');
const dollar = new Currency('USD', 'US Dollar');
const pricing2 = new Pricing(50, dollar);
console.log(`Initial: ${pricing2.displayFullPrice()}`);

pricing2.amount = 75;
pricing2.currency = new Currency('GBP', 'British Pound');
console.log(`After modification: ${pricing2.displayFullPrice()}`);
console.log('');

// Test 3: Testing static convertPrice method
console.log('3. Testing static convertPrice method:');
const originalAmount = 100;
const conversionRate = 1.2;
const convertedAmount = Pricing.convertPrice(originalAmount, conversionRate);
console.log(`Original amount: ${originalAmount}`);
console.log(`Conversion rate: ${conversionRate}`);
console.log(`Converted amount: ${convertedAmount}`);
console.log('');

// Test 4: Real-world example with conversion
console.log('4. Real-world pricing conversion example:');
const usdCurrency = new Currency('USD', 'US Dollar');
const eurCurrency = new Currency('EUR', 'Euro');

const usdPricing = new Pricing(100, usdCurrency);
console.log(`Original pricing: ${usdPricing.displayFullPrice()}`);

// Convert USD to EUR (assuming 1 USD = 0.85 EUR)
const eurRate = 0.85;
const convertedEurAmount = Pricing.convertPrice(usdPricing.amount, eurRate);
const eurPricing = new Pricing(convertedEurAmount, eurCurrency);
console.log(`Converted pricing: ${eurPricing.displayFullPrice()}`);
console.log('');

// Test 5: Various currency examples
console.log('5. Testing various currencies and amounts:');
const currencies = [
  new Currency('JPY', 'Japanese Yen'),
  new Currency('BTC', 'Bitcoin'),
  new Currency('CHF', 'Swiss Franc'),
];

const amounts = [1000, 0.001, 50.99];

currencies.forEach((currency, index) => {
  const pricing = new Pricing(amounts[index], currency);
  console.log(`Price ${index + 1}: ${pricing.displayFullPrice()}`);
});
console.log('');

// Test 6: Testing underscore storage
console.log('6. Testing underscore attribute storage:');
const testPricing = new Pricing(123.45, new Currency('CAD', 'Canadian Dollar'));
console.log(`Direct _amount access: ${testPricing._amount}`);
console.log(`Direct _currency access:`, testPricing._currency);
console.log('');

console.log('=== All Pricing tests completed ===');
