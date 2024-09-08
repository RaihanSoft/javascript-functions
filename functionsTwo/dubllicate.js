let arr = [];
dublicate = (fruits) => {
  console.log(fruits);
  for (let fruit of fruits) {
    if (arr.includes(fruit) === false) {
      arr.push(fruit);
    }
  }
  console.log(arr);
};

let fruits = ["mango", "orange", "lemon", "apple", "mango", "lemon", "lemon"];
dublicate(fruits);
