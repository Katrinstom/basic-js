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
  let obj = {};

  for(let i = 0; i < domains.length; i++) {
    let dmn = '';
    let arr = domains[i].split('.').reverse();
    
    for(let j = 0; j < arr.length; j++) {
    dmn = dmn + '.' + arr[j];
    if(obj.hasOwnProperty(dmn)) obj[dmn] = obj[dmn] + 1;
    else obj[dmn] = 1;
    }
    
  }
  return obj;
}

module.exports = {
  getDNSStats
};
