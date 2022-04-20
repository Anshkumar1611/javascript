var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstname = function () {
  console.log(`Your firstname is : ${this.firstName}`);
};

var Ansh = new User("Ansh", 2);
Ansh.getCourseCount();

if (Ansh.hasOwnProperty("firstName")) {
  Ansh.getFirstname();
}

//console.log(hitesh);

var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstname();
//console.log(sam);
