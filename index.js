// Modulo
const calculator = require('birthday-calculator');

const date = new Date('1990,10,01');
const result = calculator.getDayWhenBorn(date);
console.log(result);
