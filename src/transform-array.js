const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) { // проверка на массив
    throw new Error('\'arr\' parameter must be an instance of the Array!'); // выкинет ошибку с нужным текстом
  } 
  const result = []; // создаем новый массив который будем потом возвращать
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]) {  
      case '--double-next': {
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);  // вместо этого элемента в массив добивится следующий элемент
        }
        break;
      }
      case '--double-prev': {
        if (i > 0) {
          result.push(arr[i - 1]); // добавится предыдущий в новый массив на место этой записи
        }
        break;
      }
      case '--discard-next': {
        if (arr[i+2] === '--discard-prev' || arr[i+2] === '--double-prev'){ //если предыдущий "сбросить предыдущий"||'умножить предыдущий' то пропускаются оба"
          i++; //ничего не делается и пропускаются
        }
        i++; // перемотать на следующий
        break;
      }
      case '--discard-prev': { 
        result.pop(); //в новом массиве удаляем последний добавленный элемент
        break;
      }
      default: {
        result.push(arr[i]); // в остальных случаях просто добавляем в результирующий массив
        break;
      }
    }
  }
  return result;
}

module.exports = {
  transform
};
