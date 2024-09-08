multiply = (number) => {
  if (number % 2 === 1) {
    let result = number * 2;
    return result;
  } else {
    let result = number / 2;
    return result;
  }
};

let TotalResult = multiply(11);
console.log(TotalResult);
