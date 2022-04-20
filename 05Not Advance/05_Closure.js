// function init() {
//   var firstName = "Ansh";
//   console.log("I am init");

//   function sayFirstName() {
//     console.log(firstName);
//   }
//   return sayFirstName;
// }

// var value = init();

// value();

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5));//this will return 10
//doAddition()()() //curring same as closure just for info
