const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 const digits = n.toString().split('');
 const combinations = digits.map((el, index) => 
   Number([...digits.slice(0, index), ...digits.slice(index+1)].join(''))
 );
 return Math.max(...combinations);
}

module.exports = {
  deleteDigit
};
