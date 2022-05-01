const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let code = '';
  let step = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] == str[i + 1]) {
      step += 1; 
      }
      else if(str[i] == str[i - 1]) {
        step += 1;
        code += step + str[i];
        step = 0;
      } 
      else if(str[i] !== str[i + 1]) {
        code += str[i];
      }
  }
  return code;
}

module.exports = {
  encodeLine
};
