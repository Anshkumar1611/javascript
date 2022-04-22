const user = ["Ansh", 3, "admin"];
var role = user[2];
var name = user[0];

var [name, courseCount, role] = user;

console.log(role);

//here we can use any name to hold the values of array as key because we are not using object

const MyUser = {
  name: "Ansh",
  courseCount: 5,
  role: "admin",
};

console.log(MyUser.courseCount);

const { name, courseCount, role } = MyUser;
console.log(role);

//here we have to use name which is given as key by you to hold the values of array as key because we are using object and already define the name of keys for holding values