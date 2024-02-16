const isHex = require('is-hex-color-code');

console.log(isHex('#FFFFFF')); // Output: true
console.log(isHex('#123abc')); // Output: true
console.log(isHex('#FFFFFF')); // Output: false
console.log(isHex('#HHJJZZ')); // Output: false
console.log(isHex('#ACBD')); // Output: false
