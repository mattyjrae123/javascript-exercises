const palindromes = function (string) {
  // remove non-character values from string (punctuation etc)
  string = string.split('')
                 .filter(char => char.toLowerCase() !== char.toUpperCase())
                 .reduce((prev, next) => prev + next)
                 .toLowerCase();

  for (let n = 0; n < string.length; n+=1) {
    if (string[n] !== string[(string.length-1)-n]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
