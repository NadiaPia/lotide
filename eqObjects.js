const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;


