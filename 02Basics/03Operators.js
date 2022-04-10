var costPrice = 200;
var mrp =500;
var sellingPrice =350;

const discount = ((mrp-sellingPrice)/costPrice)*100;

//  inbuilt function

 console.log(Math.round(discount)+ " %");
console.log(typeof discount);