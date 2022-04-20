var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is : ${this.name}`);
  },
};

var Ansh = Object.create(User);
console.log(Ansh);
Ansh.name = "hitesh Choudhary";
Ansh.getUserName();

var sam = Object.create(User, {
  name: { value: "sammy" },
  courseCount: { value: 3 },
});

sam.getUserName();
