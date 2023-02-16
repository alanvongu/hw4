function convertFahrenheitToCelsius(fahrenheit) {
    // Calculate Celsius equivalent
    let celsius = (fahrenheit - 32) * 5/9;
  
    // Return Celsius equivalent
    return celsius;
  }
let fahrenheit = 212;
let celsius = convertFahrenheitToCelsius(fahrenheit);
console.log(fahrenheit + " Fahrenheit = " + celsius + " Celsius");