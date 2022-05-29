const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍️😍️😍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👹️👹️👹️ Assertion Failed: ${actual} !== ${expected}`);
  } //in text editor pressed ctrl + . , then just copied emoji in VC code
  
};

let findKey = function(obj, callback) {
  let keyArr = Object.keys(obj);
  for (let i = 0; i <keyArr.length; i++) {
    //console.log(keyArr[i])
    if (callback(obj[keyArr[i]])) {
      return keyArr[i];
    }
  } 
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))

/*assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "noma");*/

