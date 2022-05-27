const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(expected, expected) === false) {
    console.log(`👹️👹️👹️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`😍️😍️😍️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
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

const eqObjects = function(object1, object2) {
  let keysObject1 = Object.keys(object1);
  let keysObject2 = Object.keys(object2);

  if (keysObject1.length !== keysObject2.length) {
    return false;
  }

  for (let key of keysObject1) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
         
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);
