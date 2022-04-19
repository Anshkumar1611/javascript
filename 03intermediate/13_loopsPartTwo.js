const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

// var i = 0;

// for (;;) {
//   if (i > 3) break;
//   console.log(i);
//   i++;
// }


//working same as for and while loop but in just one line 
myStates.forEach((s) => (console.log(s)));    //it uses call back function () => ()
// output:
// Rajasthan
// Delhi
// Assam
// 1947
// Tamil Nadu
// Maharashtra
