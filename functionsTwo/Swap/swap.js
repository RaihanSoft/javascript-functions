// ! exp one
let a = 2;
let b = 3;
console.log(a,b);


let temp = a;
a = b;
b = temp;
console.log(a, b);

console.log("______");

// ! exp two
let x = 5;
let y = 7;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);
