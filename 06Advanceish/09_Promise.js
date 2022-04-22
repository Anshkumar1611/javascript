const uno = () => {
  return "I am One";
};

// const dos = () => {
//   setTimeout(() => {
//     return "I am two";
//   }, 3000);
// };

const dos = () => {
  return new Promise((resolve, reject) => { //go for the documentation on mdn or youtube
    setTimeout(() => {
      resolve("I am two");
    }, 3000);
  });
};

const tres = () => {
  return "I am Three";
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne); // o/p=I am One

  let valTwo = await dos(); //await = wait until this comes up with the returned value from the funtion and then next line will execute 
  console.log(valTwo); // o/p=I am two

  let valThree = tres();
  console.log(valThree); // o/p=I am Three
};

callMe();



