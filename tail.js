const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍️😍️😍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👹️👹️👹️ Assertion Failed: ${actual} !== ${expected}`);
  } //in text editor pressed ctrl + . , then just copied emoji in VC code
  
};

assertEqual("lighthouse Labs", "lighthouse Labs");
//assertEqual(1, 11);

const tail = function(arr) {
  return arr.slice(1)
}

const arr1 = [1, 2, 3]
const res1 = tail(arr1)
assertEqual(res1[0], 2); 
assertEqual(res1[1], 3); 

const arr2 = [2, 4, 5];
tail(arr2)
assertEqual(arr2.length, 3)