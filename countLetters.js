
let countLetters = function(sentence) {
  let result = {};
  for (let letters of sentence) {
   
    if (letters === " ") {
      continue;
    }
    if (result[letters] === undefined) {
      result[letters] = 0;
      
    }
    result[letters]++;
        
  }
  return result;
};

module.exports = countLetters;
 
