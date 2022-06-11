
const findKeyByValue  = function(obj, keyValue) {
  let keyArr = Object.keys(obj);
  console.log(keyArr);
  for (let i = 0; i < keyArr.length; i++) {
    if (obj[keyArr[i]] === keyValue) {
      return keyArr[i];
    }
  }
};

module.exports = findKeyByValue;
