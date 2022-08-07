const sumAll = function(first, last) {
  if (!validParameters(first, last)) {
    return "ERROR";
  }

  if (first > last) {
    let temp = first;
    first = last;
    last = temp;
  }

  let sum = 0;

  while (first <= last) {
    sum += first;
    first += 1;
  }

  return sum;
};

function validParameters(first, last) {
  if (typeof first != "number" || typeof last != "number") {
    return false;
  }

  if (first < 0 || last < 0) {
    return false;
  }

  return true;
}

// Do not edit below this line
module.exports = sumAll;
