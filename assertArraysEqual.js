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

assertArraysEqual([1, 2, 3, 5], [1, 2, 3]);