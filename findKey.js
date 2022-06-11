
let findKey = function(obj, callback) {
  let keyArr = Object.keys(obj);
  for (let i = 0; i < keyArr.length; i++) {
    if (callback(obj[keyArr[i]])) {
      return keyArr[i];
    }
  }
};



module.exports = findKey;