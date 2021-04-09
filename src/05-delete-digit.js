/* eslint-disable radix */
/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit (n) {
  let arr = Array.from(n.toString());
  const res = [];
  if (arr.length === 1) return n;
  if (arr.length === 2) return parseInt(arr.sort((a, b) => b - a)[0]);
  arr.forEach((el, ind) => {
    arr.splice(ind, 1);
    res.push(parseInt(arr.join('')));
    arr = Array.from(n.toString());
  });
  return res.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
