// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];


//for is used to run a loop from one condition to other
for (let i = 0; i < myStates.length; i++) {
  // if (typeof myStates[i] !== "string") break;    
  console.log(myStates[i]);
}


//while is used to run a loop for a specific condition
while (i < myStates.length) {
  console.log(myStates[i]);
  i++;
}


//do-while loop runs atleast one time even condition is false
let i = 20;

do {
  console.log(i);
  i++;
} while (i < 10);
