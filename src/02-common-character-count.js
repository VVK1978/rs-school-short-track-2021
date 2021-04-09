/* eslint-disable no-unused-expressions */
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount (s1, s2) {
  const array2 = s2.split('');
  s1.split('').forEach((el) => (array2.indexOf(el) >= 0 ? array2.splice(array2.indexOf(el), 1) : 0));
  return s2.length - array2.length;
}

module.exports = getCommonCharacterCount;
