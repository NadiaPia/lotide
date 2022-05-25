const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍️😍️😍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👹️👹️👹️ Assertion Failed: ${actual} !== ${expected}`);
  } //in text editor pressed ctrl + . , then just copied emoji in VC code
  
};

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    console.log(item)
      if (itemsToCount[item] === true) {
        console.log("18 ",result)
        if (result[item] === undefined) {
          result[item] = 0;   
          console.log("21 ",result)       
        };
        result[item]++;  
        console.log("24 ",result)        
      }
      console.log("==========")
  }
  return result
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log(result1)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// const letters = ['a', 'b', 'c', 'a'];
// const lettersToCount = { a: true, c: false };
// const result2 = countOnly(letters, lettersToCount);