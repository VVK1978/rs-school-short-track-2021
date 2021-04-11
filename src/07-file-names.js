/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return [];
  }
  const res = [];
  let num = 0;
  res.push(names[0]);
  for (let j = 1; j < names.length; j++) {
    for (let i = 0; i < res.length; i++) {
      if (names[j] === res[i]) {
        num++;
        res.push(`${names[j]}(${num.toString()})`);
        i = res.length;
      } else {
        res.push(names[j]);
        num = 0;
        j++;
        if (j === names.length) {
          return res;
        }
      }
    }
  }
  return res;
}
module.exports = renameFiles;
