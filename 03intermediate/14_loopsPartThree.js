const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

//for of loop used for iterating through Arrays  ex- for (const n "of" names)
for (const n of names) {      //for of loop
  console.log(n);
//output - 
// Youtube
// facebook
// Instagram
// Netflix
// Amazon
}



const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline.in",
};


// for in loop used for iterating through Objects  ex -for (const n "in" symbols)
for (const n in symbols) {       //for in loop
  console.log(`Key is: ${n} and value is: ${symbols[n]}`);      // n is representing key and symbols are representing values {(key :values)=(n : symbols)}
}
// output :
// Key is: yt and value is: Youtube
// Key is: ig and value is: Instagram
// Key is: fb and value is: Facebook
// Key is: lco and value is: LearnCodeOnline.in
