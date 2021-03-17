//today forecast value assign to const. kelvin.
const kelvin = 284;
//converting kelvin to celsius and assign value to "celsius" variable.
let celsius = kelvin-273;
//calculate the value of the fahrenheit variable.
let fahrenheit = celsius*(9/5)+32;
//round the value of the variable fahrenheit and save it in the same variable name
fahrenheit = Math.floor(fahrenheit);
//print result: "The temperature is 69 degrees Fahrenheit."
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
