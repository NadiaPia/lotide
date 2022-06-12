const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  
  it("returns['I've', 'been', 'to', 'Hollywood'] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
    assert.deepEqual(takeUntil((["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]), x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });

  it("returns[1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5, -1]", () => {
    assert.deepEqual(takeUntil(([1, 2, 5, 7, 2, -1, 2, 4, 5, -1]), x => x < 0), [1, 2, 5, 7, 2]);
  });

  
});
