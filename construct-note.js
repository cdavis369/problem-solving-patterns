// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  console.log(msg, letters)
  const msgFreq = {};
  const letFreq = {};

  for (const char of msg) {
    msgFreq[char] = (msgFreq[char] || 0) + 1;
  }

  for (const char of letters) {
    letFreq[char] = (letFreq[char] || 0) + 1;
  }
  
  for (const char of msg) {
    if (!letFreq[char] || letFreq[char] < msgFreq[char]) {
      return false
    }
  }

  return true;
}

module.exports = constructNote;
