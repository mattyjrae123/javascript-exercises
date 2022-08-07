const sumAll = function(first, last) {
  if (first < 0 || last < 0) {
    return "ERROR";
  }

  if (first > last) {
    let temp = first;
    first = last;
    last = temp;
  }

  let sum = 0;

  for (; first <= last; first += 1) {
    sum += first;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
