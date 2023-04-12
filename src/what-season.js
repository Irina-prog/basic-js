const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date === 'undefined'){
    return 'Unable to determine the time of year!';
  }
  if (!date) {
    return false;
  }
  const isTrueDate = () => {
    try {
      Number(date);
      return true;
    } catch {
      return false;
    }
  };
  if (!(date instanceof Date) || !isTrueDate()) {
    throw new Error('Invalid date!');
  }
  const currentYear = date.getFullYear();
  const startSpring = new Date(currentYear, 2, 1);
  const startSummer = new Date(currentYear, 5, 1);
  const startAutumn = new Date(currentYear, 8, 1);
  const startWinter = new Date(currentYear, 11, 1);
  
  if (date < startSpring || date >= startWinter) {
    return 'winter';
  }
  if (date >= startSpring && date < startSummer) {
    return 'spring';
  }
  if (date >= startSummer && date < startAutumn) {
    return 'summer';
  }

  return 'autumn';
}

module.exports = {
  getSeason
};

