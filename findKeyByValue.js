const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍️😍️😍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👹️👹️👹️ Assertion Failed: ${actual} !== ${expected}`);
  } //in text editor pressed ctrl + . , then just copied emoji in VC code
  
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue  = function(obj, keyValue) {
  let keyArr = Object.keys(bestTVShowsByGenre);
  console.log(keyArr);
  for (let i = 0; i < keyArr.length; i++) {
    if (obj[keyArr[i]] === keyValue) {
      return keyArr[i];
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "sci_fi");

//let item = "comedy";

//console.log(bestTVShowsByGenre[item])
//let keyArr = Object.keys(bestTVShowsByGenre)
//console.log(keyArr)
//console.log(keyArr[2])


//console.log(Object.keys(bestTVShowsByGenre))
//console.log(bestTVShowsByGenre[item])



//assertEqual("lighthouse Labs", "lighthouse Labs");