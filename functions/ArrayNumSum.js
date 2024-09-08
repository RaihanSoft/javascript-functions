ArraySum = (arg) => {
  let sum = 0;
  console.log(arg);
  arg.map((item) => {
    console.log(item);
    sum += item;
  });
  return sum;
};
let list = [1, 2, 4, 6];
let Results = ArraySum(list);
console.log("Total sum is :", Results);