const eqArrays = require("./eqArrays")

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === false) {
    console.log(`👹️👹️👹️ Assertion Failed`);
  } else {
    console.log(`😍️😍️😍️ Assertion Passed`);
  }

};


module.exports = assertArraysEqual;