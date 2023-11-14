Temperature Converter
This package provides two functions for converting between Celsius and Fahrenheit temperatures:

celsiusToFahrenheit(celsius)
Converts a temperature from Celsius to Fahrenheit.

JavaScript
const temperatureConverter = require('temperature-converter');

const fahrenheit = temperatureConverter.celsiusToFahrenheit(20);
console.log(fahrenheit); // Output: 68
Use code with caution. Learn more
Arguments:

celsius: The temperature in Celsius to convert.
Returns:

The temperature in Fahrenheit.

Throws:

Error: If the input is not a number.
fahrenheitToCelsius(fahrenheit)
Converts a temperature from Fahrenheit to Celsius.

JavaScript
const temperatureConverter = require('temperature-converter');

const celsius = temperatureConverter.fahrenheitToCelsius(68);
console.log(celsius); // Output: 20
Use code with caution. Learn more
Arguments:

fahrenheit: The temperature in Fahrenheit to convert.
Returns:

The temperature in Celsius.

Throws:

Error: If the input is not a number.