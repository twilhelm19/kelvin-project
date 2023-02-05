//Project: Kelvin Weather

// forecast for today
const kelvin = 293; 

//convert today's temp from kelvin to celsius 
const celsius = kelvin - 273;  

//convert todays temp from celsius to fahrenheit with changeable variable type
let fahrenheit = celsius *(9/5) + 32; 

//change fahrenheit variable by rounding down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); 

//Extra Practice: 

let newton = celsius *(33/100); 
console.log(newton); 
newton = Math.floor(newton); 

console.log(`The temperature is ${newton} degrees Newton.`); 
