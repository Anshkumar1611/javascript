// What is context and scope in JS?

// Context is related to objects. It refers to the object to which a function belongs. When you use the JavaScript “this” keyword, it refers to the object to which function belongs. Scope refers to the visibility of variables, and content refers to the object to which a function belongs.

// Is context and scope the same?

// Fundamentally, scope is function-based while context is object-based. In other words, scope pertains to the variable access of a function when it is invoked and is unique to each invocation. Context is always the value of the this keyword, which is a reference to the object that “owns” the currently executing code.

// sayHello();

// function sayHello() {
//   console.log("Hello");
// }

if (2 === "2") {
    console.log("This is true");
  }
  
  var myName = "hitesh";
  if (myName === window.myName) {
    console.log("This is again a true statement");
  }
  