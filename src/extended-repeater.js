const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  const additionRepeatTimes = options.additionRepeatTimes ?? 1; // гарантировано будет содержать число - учли значение по умолчанию
  const repeatTimes = options.repeatTimes ?? 1; // тоже самое
  const addition = typeof options.addition === 'undefined'? '': options.addition + ''; // если undefined трактуем как пустую строчку и чтобы там не было например null приводим к строчке
  for (let i = 0; i < repeatTimes; i++){ //сколько раз должны добавить исходную строчку
    result += str; // исходная строчка добавляется 
    for (let j = 0; j < additionRepeatTimes; j++){ // сколько раз добавляются дополнения
      result += addition; // сначала добавляется дополнение
      if(j !== additionRepeatTimes - 1){  //если не последний повтор
        result += options.additionSeparator ?? '|';   // добавляется разделитель
      }
    }
    if(i !== repeatTimes - 1){ //если не последний повтор
      result += options.separator ?? '+'; // добавляется разделитель
    }
  }
  return result;
}

module.exports = {
  repeater
};
