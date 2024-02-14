// add whatever parameters you deem necessary
function countPairs(arr, target) {
  const differences = new Set();
  let count = 0;

  for (num of arr) {
    let diff = target - num;
    if (differences.has(num)) count++;
    differences.add(diff);
  }

  return count;
}

module.exports = countPairs;