// add whatever parameters you deem necessary
function separatePositive(arr) {
  let swapIdx = 0, i = 0;


  while (swapIdx === 0 && i < arr.length) {
    if (arr[i] < 0) swapIdx = i;
    i++;
  }

  if (i === arr.length) return arr;

  for (let i = swapIdx; i < arr.length; i++) {
    if (arr[i] > 0) {
      const tmp = arr[swapIdx];
      arr[swapIdx] = arr[i];
      arr[i] = tmp;
      swapIdx++;
    }
  }
  return arr;
}

module.exports = separatePositive;
