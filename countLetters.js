const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍️😍️😍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👹️👹️👹️ Assertion Failed: ${actual} !== ${expected}`);
  } //in text editor pressed ctrl + . , then just copied emoji in VC code
  
};

let countLetters = function(sentence) {
  let result = {};
  for (let letters of sentence) {
    //console.log(letters);
    if (letters === " ") {
      continue;
    }
    if (result[letters] === undefined) {
      result[letters] = 0;
      //console.log(result)
    }
    result[letters]++;
    //console.log("=======")
    
  }
  return result;
};
 
//console.log(countLetters("lighthouse in the house"));
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["t"], 2);