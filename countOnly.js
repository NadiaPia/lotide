
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item] === true) {
      if (result[item] === undefined) {
        result[item] = 0;
      }
      result[item]++;
    }
  }
  return result;
};

module.exports = countOnly;