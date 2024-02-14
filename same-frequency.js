// add whatever parameters you deem necessary
function sameFrequency(firstNum, secondNum) {
  const freq = {};
  
  while (firstNum > 0) {
    let digit = firstNum % 10;
    freq[digit] = (freq[digit] || 0) + 1;
    firstNum = Math.floor(firstNum / 10);
  }

  while (secondNum > 0) {
    let digit = secondNum % 10;
    if (!freq[digit]) {
      return false;
    }
    freq[digit]--;
    if (freq[digit] < 0) {
      return false;
    }
    secondNum = Math.floor(secondNum / 10);
  }

  for (let key in freq) {
    if (freq[key] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = sameFrequency;

// function sameFrequency(firstNum, secondNum) {
//   const stringOne = String(firstNum);
//   const stringTwo = String(secondNum);
//   const firstFreq = {};
//   const secondFreq = {};

//   for (const char of stringOne) {
//     firstFreq[char] = (firstFreq[char] || 0) + 1;
//   }

//   for (const char of stringTwo) {
//     secondFreq[char] = (secondFreq[char] || 0) + 1;
//   }

//   for (const char of stringOne) {
//     if (!secondFreq[char] || firstFreq[char] !== secondFreq[char]) {
//       return false;
//     }
//   }

//   for (const char of stringTwo) {
//     if (!firstFreq[char] || secondFreq[char] !== firstFreq[char]) {
//       return false;
//     }
//   }

//   return true;
// }
