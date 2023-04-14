const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)){ // проверили массив ли пришел
    return false;
  }
  return arr
  .filter(elem => typeof elem === 'string') // отфильтровали только строчки
  .map((element) => element.trim()[0].toUpperCase())  // обрезали пробелы и слева и справа
  .sort()  //сортирнули
  .join('');  //соединили
}

module.exports = {
  createDreamTeam
};
