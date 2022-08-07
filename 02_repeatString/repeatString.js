const repeatString = function(stringToRepeat, numRepeats) {
  let repeatedString = '';

  for (let i = 0; i < numRepeats; i++) {
    repeatedString += stringToRepeat;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
