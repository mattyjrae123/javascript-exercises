const ftoc = function(tempFahrenheit) {
  let tempCelcius = (tempFahrenheit-32) * (5/9);

  if (tempCelcius % 1 !== 0) {
    return +tempCelcius.toFixed(1);
  }

  return tempCelcius;
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
