class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];  // # makes the things private so array courselist becomes private using # 

  getInfo() { // GETTERS = methods/functions which return anys sort of value known as GETTERS like getInfo() method and getCourseList () method
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) { // SETTERS = methods/functions which take input anys sort of value known as SETTERS like enrollCourse () method
    this.#courseList.push(name); // access private array using # before the array
  }
  getCourseList() {
    return this.#courseList;
  }

  login() {
    return "You are logged in";
  }
}

class SubAdmin extends User {  //Inheritance = now Class SubAdmin can use every property of class User
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am subadmin";
  }
  login() { //this login is returned when we call class SubAdmin eventhough we have the same function in User class But js is smart here and run the function from which class it is called .
    return "login for admin only";
  }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com");
//console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());
