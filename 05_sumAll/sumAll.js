const sumAll = function(first, last) {
  let sum = 0;

  if (first > last) {
    let temp = first;
    first = last;
    last = temp;
  }

  for (; first <= last; first += 1) {
    sum += first;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
