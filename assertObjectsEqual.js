const eqObjects = require("./eqObjects");


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    console.log(`đšī¸đšī¸đšī¸ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`đī¸đī¸đī¸ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  
};

const cd = { c: "1", d: ["2", 3] };
const dd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "6" };

//assertObjectsEqual(cd, dc);
//assertObjectsEqual(cd, dd);

module.exports = assertObjectsEqual;

