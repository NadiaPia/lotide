const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [9] for [2, 2, 9, 2, 2]", () => {
    assert.deepEqual(middle([2, 2, 9, 2, 2]), [9]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  
});


