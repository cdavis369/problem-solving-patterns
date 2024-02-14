// add whatever parameters you deem necessary
function isSubsequence(strOne, strTwo) {
  let strOneIdx = 0;
  for (char of strTwo) {
    if (char === strOne[strOneIdx]) strOneIdx++;
    if (strOneIdx === strOne.length) return true;
  }
  return false;
}

module.exports = isSubsequence;