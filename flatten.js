
const flatten = function(arr3) {
  let flattened = [];
  for (let val of arr3) {
    if (Array.isArray(val)) {
      for (let el of val) {
        flattened.push(el);
      }
    } else {
      flattened.push(val);
    }
  }
  return flattened;
};


module.exports = flatten;