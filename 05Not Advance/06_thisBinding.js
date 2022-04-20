const Ansh = {
  firstName: "Ansh",
  lastName: "Kumar",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// Ansh.getInfo();
// dj.getInfo();

var djInfo = Ansh.getInfo.bind(dj); //bind method allow to use function from one method to other and store it but not return it until the method is called as shown
djInfo();

Ansh.getInfo.call(dj);  //call method direct take the values from calling method and print/console.log them. 
