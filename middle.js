/*const assertArraysEqual = function(arr1, arr2) {

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

const middle = function(array) {
  let centerArr = [];
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let i = array.length / 2;
    centerArr.push(array[i - 1], array[i]);
  } else {
    let i = Math.ceil(array.length / 2);
    centerArr.push(array[i - 1]);
  }
  return centerArr;
};
//console.log(middle([2, 2, 9, 2, 2]))

assertArraysEqual(middle([2, 2, 9, 2, 2]), [9]);*/

var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};
for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  //console.log(numberOfMoons);
  console.log(planetMoons[planet]);
}

/*const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);*/
