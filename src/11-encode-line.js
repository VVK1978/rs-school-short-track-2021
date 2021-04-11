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
  const array = str.split('');
  let res = '';
  let num = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      if (num === 1) {
        res += array[i];
      } else {
        res += num.toString() + array[i];
        num = 1;
      }
    } else {
      num += 1;
    }
  }
  return res;
}

module.exports = encodeLine;
