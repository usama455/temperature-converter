// index.js

function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== 'number') {
    throw new Error('Input must be a number');
  }

  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== 'number') {
    throw new Error('Input must be a number');
  }

  return ((fahrenheit - 32) * 5) / 9;
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
};
