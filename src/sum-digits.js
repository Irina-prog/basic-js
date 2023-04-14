const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const digits = n.toString().split(''); // преобразуется в строку и разделяется по символьно
  if (digits.length === 1) { //если только одна цифра ее и возращаем- не нужно суммировать
    return n;
  }
  return getSumOfDigits(digits.reduce((sum, item) => sum += Number(item), 0)); // рекурсивно вызывать пока сумма цифр не будет состоять из одной цифры
} //вызвали еще раз нашу функцию но на вход ей передали результат сложения цифр

module.exports = {
  getSumOfDigits
};
