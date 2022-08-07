const removeFromArray = function(array, itemToRemove) {
  for(let i = 0; i < array.length; i++) {
    if (array[i] === itemToRemove) {
      array.splice(i, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
