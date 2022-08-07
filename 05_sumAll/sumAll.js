const sumAll = function(first, last) {
  let sum = 0;

  for (; first <= last; first += 1) {
    sum += first;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
