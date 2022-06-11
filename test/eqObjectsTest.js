const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  const cd3 = { c: "1", d: [2, 3, 4] };

  it("returns 'true' for eqObjects(ab, ba)", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns 'true' for eqObjects(cd, dc)", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("returns 'false' for eqObjects(cd2, cd3)", () => {
    assert.strictEqual(eqObjects(cd2, cd3), false);
  });
  
});