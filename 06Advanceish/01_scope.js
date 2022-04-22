//console.log(name);

var name = "Ansh";

if (true) {
  let lastName = "Kumar";
}
console.log(lastName);
  
//here scope of var and let is introduced
//"let" is known inside {} and removed as we move outside the scope.
//while "var" is still known outside the {} which is not a good thing .
//Therefore we should use let inside {} scope so that we could know the error if any.