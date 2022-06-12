
let without = function(sourseArr, itemToremoveArr) {
  let newArr = [];
  for (let val of sourseArr) {
    if (!itemToremoveArr.includes(val)) {
      newArr.push(val);
    }
  }
  return newArr;
};
module.exports = without;
