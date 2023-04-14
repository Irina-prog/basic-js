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
  const minusOneIndexes = []; // индексы минус единичек
  let index = -1; // -1 чтобы первый поиск шел с нуля
  while (true) {
    index = arr.indexOf(-1, index + 1)  // первым параметров кого искать а вторым с какого индекса начинать
    if (index < 0) { //если не нашел минус единичку - выйти из цикла
      break;
    }
    minusOneIndexes.push(index); //закидываем индекс единички в массив
  }
  const result = arr
    .filter(i => i !== -1)  //отфильтровываем все -1 чтобы их не было в исходном массиве
    .sort((a, b) => a - b);  // оставшиеся числа сортируем
  for (const index of minusOneIndexes) {  // циклом фор проходимся по массиву с индексами -1
    result.splice(index, 0, -1); // и по их индексу вставляем в сортированный массив
  }
  return result;
}

module.exports = {
  sortByHeight
};
