const assert = require('chai').assert;
const head = require('../head');
//const assertEqual = require('../assertEqual');


//describe and it are Mocha's functions to register code tests
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });
});

/* we replaced this block of test cobe with Mocha's functions to register our tests
assertEqual(head([5, 3]), 5); //from head.js 
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/

