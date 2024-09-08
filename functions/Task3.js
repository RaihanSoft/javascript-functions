make_avg = (list) => {
  let sum = 0;
  list.map((item) => {
    sum += item;
  });
  let result = sum / list.length;
  return result;
};

let list = [10,  10];
let TotalResult  = make_avg(list);
console.log(TotalResult);
