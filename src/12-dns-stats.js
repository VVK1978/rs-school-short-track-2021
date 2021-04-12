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
function getDNSStats (domains) {
  const result = {};
  let tempEl = '';
  const array = domains.map((el) => el
    .split('.')
    .reverse()
    .join('.'));
  array.forEach((item) => {
    // eslint-disable-next-line array-callback-return
    item.split('.').map((el) => {
      tempEl = `${tempEl}.${el}`;
      result[`${tempEl}`] = 1 + result[`${tempEl}`] || 1;
    });
    tempEl = '';
  });
  return result;
}

module.exports = getDNSStats;
