const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === false) {
    console.log(`👹️👹️👹️ Assertion Failed`);
  } else {
    console.log(`😍️😍️😍️ Assertion Passed`);
  }

};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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
//console.log(middle([2, 2, 9, 2, 2]))

assertArraysEqual(middle([2, 2, 9, 2, 2]), [9]);