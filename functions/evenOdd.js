function even(data) {
  let sum = 0;
  data.map((item) => {
    sum += item;
  });
  if (sum % 2 === 0) {
    console.log("Total Sum of Array List is Even :", sum);
    return true;
  } else {
    console.log("Total Sum of Array List is Odd :", sum);
    return false;
  }
}
let list = [2, 4, 6, 1, 1];
let result = even(list);
console.log(result);
