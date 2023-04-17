const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const list = domains
    .map(el => el.split('.').reverse()) 
  return list.reduce((result, item) => {
    for(let i = 0; i < item.length; i ++) {
      const key = item.slice(0, i + 1).map(i => `.${i}`).join('');
      result[key] = (result[key] ?? 0) + 1;
    } 
    return result;
  }, {}); 
}

module.exports = {
  getDNSStats
};

