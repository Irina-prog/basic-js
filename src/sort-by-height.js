const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusOneIndexes = [];
  let index = -1;
  while(true) {
    index = arr.indexOf(-1, index + 1)
    if (index < 0) {
      break;
    }
    minusOneIndexes.push(index);
  }
  const result = arr.filter(i => i !== -1).sort((a, b) => a - b);
  for(const index of minusOneIndexes){
    result.splice(index, 0, -1);
  }
  return result;
}

module.exports = {
  sortByHeight
};
