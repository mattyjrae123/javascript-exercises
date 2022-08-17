const fibonacci = function(targetIdx) {
  if (targetIdx == 1 || targetIdx == 2) {
    return 1;
  }

  if (targetIdx < 0) {
    return "OOPS";
  }

  let prevFibValue = 1;
  let fibValue = 2;
  let currentIdx = 3;

  while (currentIdx < targetIdx) {
    let temp = fibValue;
    fibValue += prevFibValue;
    prevFibValue = temp;

    currentIdx += 1;
  }

  return fibValue;
};

// Do not edit below this line
module.exports = fibonacci;
