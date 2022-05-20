const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍️😍️😍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👹️👹️👹️ Assertion Failed: ${actual} !== ${expected}`);
  } //in text editor pressed ctrl + . , then just copied emoji in VC code
  
};

const head = function(arr) {
  return arr[0];
}


assertEqual(head([]), 5);
//assertEqual(1, 11);