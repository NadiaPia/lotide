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
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]) , [1, 2, 3, 4, 5, 6]);