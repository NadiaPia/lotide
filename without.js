const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === false) {
    console.log(`👹️👹️👹️ Assertion Failed`);
  } else {
    console.log(`😍️😍️😍️ Assertion Passed`);
  }

};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//assertArraysEqual([1, 2, 3, 5], [1, 2, 3]);

const words = ["hello", "world", "lighthouse"];
const numbers = [1, 2, 3]

let without = function(sourseArr, itemToremoveArr) {
  let newArr = [];
  for(let val of sourseArr) {
    if (!itemToremoveArr.includes(val)) {
      newArr.push(val)
    }
  }
  return newArr
}

//without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
//assertArraysEqual(without(numbers, [2]), [1, 3]);