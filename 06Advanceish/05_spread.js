// var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
// console.log(returnedValue);  output =8

// var myObj = {};

// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
// console.log(myObj);  output ={ a: 1, b: 2, c: 3, z: 9, y: 8, x: 7 }

function sumOne(a, b) {
  return a + b;
}

var myA = [5, 4];
//console.log(sumOne(...myA)); // spread Operator =(...args)

function sumTwo(a, b, ...args) {
  console.log(args); // output [ 1, 1, 1 ]
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 1, 1)); // output [ 3, 6 ]

