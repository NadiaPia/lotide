const assertEqual = require("./assertEqual") //as I sent test code to the tailTest.js 
//(which is uses assertEqual function, I don't need this function in this tail.js)

const tail = function(arr) {
  return arr.slice(1)
}



module.exports = tail;