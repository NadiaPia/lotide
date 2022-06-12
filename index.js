const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const takeUntil = require('./takeUntil');
const without = require('./without');
const map = require('./map');




/*
module.exports = {  // I did object shorthands in line 17
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly
};
*/

module.exports = {head, tail, middle, countLetters, countOnly, eqObjects, findKey, findKeyByValue, flatten, takeUntil, without, map}

/* to run:

const _ = require('./index')
undefined
> _
{
  head: [Function: head],
  tail: [Function: tail],
  middle: [Function: middle],
  countLetters: [Function: countLetters],
  countOnly: [Function: countOnly]
}*/ 