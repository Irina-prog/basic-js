const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s2List = s2.split(''); // массив из символов второй строки
  return s1.split('').reduce((count, letter) => { // массив по первой строке
  const index = s2List.indexOf(letter); // искали индекс во втором массиве
  if (index >= 0) { // если нашли  
    count++; //счетчик увеличили
    s2List.splice(index, 1); //удалили во втором массиве чтобы заново не считать если опять попадется
  }
  return count;
 }, 0);
}

module.exports = {
  getCommonCharacterCount
};
