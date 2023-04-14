const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const groups = n.split('-'); //получаем массив групп чисел
  if (groups.length !== 6) { //если не ровно 6 групп то false -не верный мак адрес
    return false;
  }
  return groups.every(i => {  //проверяем каждую группу чисел
    const number = parseInt(i, 16); // приводим к числу 16-ричную строчку - выдает 10-тичную
    return number >= 0 && number <= 0xFF;  // сравнить само число FF(255) самое большое число которое занимает 2 разряда в 16-ой записи || либо можно было проверять на длину чисел в группе что равна 2
  })
}
module.exports = {
  isMAC48Address
};
