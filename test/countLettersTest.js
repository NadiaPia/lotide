const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 2 for countLetters('lighthouse in the house')['t']", () => {
    const result1 = countLetters("lighthouse in the house");
    assert.strictEqual(result1["t"], 2);
  });

  it("returns undefined for countLetters('lighthouse in the house')['f']", () => {
    const result1 = countLetters("lighthouse in the house");
    assert.strictEqual(result1["f"], undefined);
  });
  
});

