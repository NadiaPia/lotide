const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")

assertArraysEqual(middle([2, 2, 9, 2, 2]), [9]);
assertArraysEqual(middle([2, 2, 9, 2, 2]), [2]);
