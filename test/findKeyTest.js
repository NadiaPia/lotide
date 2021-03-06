const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  let obj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("returns 'noma' for (findKey(obj, x => x.stars === 2))", () => {
    assert.strictEqual(findKey(obj, x => x.stars === 2), "noma");
  });

  it("returns 'undefined' for (findKey(obj, x => x.stars === 5))", () => {
    assert.strictEqual(findKey(obj, x => x.stars === 5), undefined);
  });
  
});
