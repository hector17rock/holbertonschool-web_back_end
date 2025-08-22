import Currency from './3-currency.js';

console.log('=== Testing Currency Class ===\n');

// Test 1: Basic creation and displayFullCurrency
console.log('1. Testing basic currency creation:');
const dollar = new Currency('$', 'Dollars');
console.log(`Display: ${dollar.displayFullCurrency()}`);
console.log(`Code: ${dollar.code}`);
console.log(`Name: ${dollar.name}`);
console.log('');

// Test 2: Testing getters and setters
console.log('2. Testing getters and setters:');
const euro = new Currency('€', 'Euros');
console.log(`Initial: ${euro.displayFullCurrency()}`);

euro.code = 'EUR';
euro.name = 'European Euros';
console.log(`After modification: ${euro.displayFullCurrency()}`);
console.log('');

// Test 3: Testing various currencies
console.log('3. Testing various currencies:');
const currencies = [
  new Currency('¥', 'Yen'),
  new Currency('£', 'Pounds'),
  new Currency('₹', 'Rupees'),
  new Currency('₿', 'Bitcoin'),
];

currencies.forEach((currency, index) => {
  console.log(`Currency ${index + 1}: ${currency.displayFullCurrency()}`);
});
console.log('');

// Test 4: Testing underscore storage
console.log('4. Testing underscore attribute storage:');
const franc = new Currency('CHF', 'Swiss Franc');
console.log(`Object structure:`, franc);
console.log(`Direct _code access: ${franc._code}`);
console.log(`Direct _name access: ${franc._name}`);
console.log('');

console.log('=== All Currency tests completed ===');
