const tail = require('../tail');
const assertEqual = require('../assertEqual');

const arr1 = [1, 2, 3];
const res1 = tail(arr1);
assertEqual(res1[0], 2);
assertEqual(res1[1], 3);

const arr2 = [2, 4, 5];
tail(arr2)
assertEqual(arr2.length, 3);