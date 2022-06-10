const eqArrays = require("../eqArrays.js")
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3, 6], [1, 2, 3]), true);