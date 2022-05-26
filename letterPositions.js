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

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    //console.log(i)
    //console.log(sentence[i])
    //sentence[i] = h
    if (results[sentence[i]] !== undefined) {
      results[sentence[i]].push(i);
      continue;
    }
    results[sentence[i]] = [i]; // results[sentence[i]] value // results -> { sentence[i]: results[sentence[i]]}
    //console.log(results)
  }
  return results;
};
console.log(letterPositions("he    llo"));

//assertArraysEqual(letterPositions("hello").o, [4]);