
const middle = function(array) {
  let centerArr = [];
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let i = array.length / 2;
    centerArr.push(array[i - 1], array[i]);
  } else {
    let i = Math.ceil(array.length / 2);
    centerArr.push(array[i - 1]);
  }
  return centerArr;
};


module.exports = middle