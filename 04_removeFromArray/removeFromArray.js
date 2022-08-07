const removeFromArray = function(array) {
  // iterate over function arguments; skip first argument
  for (let arg = 1; arg < arguments.length; arg += 1) {

    // iterate over array items from first argument
    for (let i =  0; i < array.length; i += 1) {

      if (array[i] === arguments[arg]) {
        array.splice(i, 1);
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
