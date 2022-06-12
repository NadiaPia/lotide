const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  const numbers = [1, 2, 3];
  
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });

  it("returns [1, 3] for [1, 2, 3]", () => {
    assert.deepEqual(without(numbers, [2]), [1, 3]);
  });

  
});
