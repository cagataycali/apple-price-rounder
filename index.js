var async = require('async');

module.exports = function (number) {
  return new Promise(function (resolve, reject) {
    var i = 0;
    for (;;) {
      if (i < 1000) {
        if ((Math.round(number * 100) / 100) < i) {
          resolve(( i - 1 ) + 0.99);
          break;
        }
        i++;
        continue;
      } else {
        reject('Apple pricing rules is strict, you have to decide your pricing between 0.99 - 999.99')
        break;
      }
    }
  })
}
