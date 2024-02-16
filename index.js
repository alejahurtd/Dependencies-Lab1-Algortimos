// Modulo
const calculator = require('birthday-calculator');

const date = new Date('2001,09,30');
const result = calculator.getDayWhenBorn(date);
console.log(result);

// Las dependencia que instale es la de dirthday-calculator, lo que hace es que me calcula con la fecha que le
// proporciono el dia en el cual la persona nació
