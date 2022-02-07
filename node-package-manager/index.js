const _ = require('lodash');

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6, 7], n => n % 2);
const myTripleArray = _.partition([1, 2, 3, 4, 5, 6, 7], n => n % 3);

console.log(myOddEvenArray);
console.info(myTripleArray);