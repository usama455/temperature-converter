# Temperature Converter


This package provides two functions for converting between Celsius and Fahrenheit temperatures:

celsiusToFahrenheit(celsius)

Converts a temperature from Celsius to Fahrenheit.

## Installation

Install the package using npm:

```bash
npm install converter-celsius-fahrenheit
```

## Usage

```javascript
import {fahrenheitToCelsius, celsiusToFahrenheit} from 'converter-celsius-fahrenheit'

const celsius = fahrenheitToCelsius(68);
console.log(celsius); // Output: 20
const fahrenheit =celsiusToFahrenheit(20);
console.log(fahrenheit); // Output: 68

```


## Throws:

Error: If the input is not a number.
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)