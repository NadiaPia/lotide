const eqArrays = require("./eqArrays")

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === false) {
    console.log(`đšī¸đšī¸đšī¸ Assertion Failed`);
  } else {
    console.log(`đī¸đī¸đī¸ Assertion Passed`);
  }

};


module.exports = assertArraysEqual;