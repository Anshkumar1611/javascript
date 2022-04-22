# Getting Started
JavaScript (JS) is a lightweight, interpreted, or [just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation) compiled programming language with [first-class](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function) functions.

## JS Engine
The JavaScript engine is an interpreter that parses and executes a JavaScript program. e.g. V8 Engine, Spider Monkey

Javascript could only run in browsers before but now, things are changed runtime environment like Node.js, Deno can be used to run js without needing a browser.
Node.js uses V8 engine.

# Basics

A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

Variables can be declared using these keywords -

- var
- let
- const 
    - constant can't be changed after declaration

Datatypes in JS - 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

Operators in JS
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

### Conditionals

1. if..else
2. switch
3. ternary operator


### Expressions and Operators

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

### Coercion and truthy/falsy values

- Coercion is like implicit type conversion in javascript.
    - e.g. `2 + "2"` will return `22`
- Falsy Values (all values below are considered as falsy in JS)
    - `undefined`
    - `null`
    - `0`
    - `''`
    - `NaN`
- All values other than these are considered as truthy values

```js
// this code will not log anything
if(undefined) {
    console.log(true)
}
```

# Intermediate

## Functions
Functions in javascript can be declared by following syntax:
```js
function sayHello(name) {
    console.log("Hello there, ");
    console.log(`Hello there, ${name}`);
}


// Calling functions
// sayHello();

// Referencing a function
// sayHello;
```

Javascript is allows functional programming.

In functional programming, functions can be treated as variables.

```js
const greetings = namastey();

or 

const anotherOne = function() {return "something"}

console.log(greetings());
```


## Context
Javascript have a concept of context.
And there is a global context.

Global Context
- In a Browser the global context is => `window`
- In a Node the global context is => something different than browser it shows `{}`

### Code Hoisting

Function and variable declarations are hoisted in JavaScript. This means that they are stored in memory of the current Execution Context and made available within the Execution Context even before the execution of the code begins.

Everything declared are registered in the context and thats why,
a function declared below call can be called before declaring in JS.

```js
tipper("5")

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}
// this will work 
// this is called CODE HOISTING
```

There are always two types of contexts
1. Global context
2. Context which is currently executing.

Execution Context ->
Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.
Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

![](assets/images/2022-04-11-13-21-29.png)
![](assets/images/2022-04-11-13-22-41.png)

Rules for execution context:
1. Function declarations are scanned and made available.
2. Variable declarations are scanned and made undefined.

### Scope Chain

😆 => Small guy can ask for icecream if he doesnt have from elder but elder cannot ask vice versa.

![](assets/images/2022-04-11-13-38-30.png)

### `this` Keyword

![](assets/images/2022-04-11-13-56-05.png)




# Advanced
 
If you learn `Arrays ,objects and loops` in any language its becomes very easy to Work because mostly data is in the form of `Arrays `,`objects` and `loops`.So if you know how to play with these 3 it is quite easy for you .

## Arrays


# Not Advance

## Maps

The Map object holds `key-value pairs` and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

```js
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
```

```js
The correct usage for storing data in the Map is through the set(key, value) method.

const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
Constructor
```

## Spread syntax (...) :

Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```

## Classes :
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

## Defining classes
Classes are in fact `special functions`, and just as you can define `function expressions and function declarations`, the class syntax has two components: `class expressions and class declarations`.

## Class declarations 
```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```
# Inheritance 

```js

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
const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
```

### Super_:
The super keyword is used to access and call functions on an object's parent.

The super.prop and `super[expr]` expressions are valid in any method definition in both classes and object literals.

### Syntax
super(`[arguments]`); // calls the parent constructor.
super.functionOnParent(`[arguments]`);
```js
class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}
```

# Promises

A Promise is a `proxy for a value` not necessarily known when the promise is created. 
It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

- `pending`: initial state, neither fulfilled nor rejected.
- `fulfilled`: meaning that the operation was completed successfully.
- `rejected`: meaning that the operation failed.

![](assets/images/promises.png)


# Using the Fetch API
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

The fetch specification differs from jQuery.ajax() in the following significant ways:

- The Promise returned from `fetch()` won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, as soon as the server responds with headers, the Promise will resolve normally (with the ok property of the response set to false if the response isn't in the range 200–299), and it will only reject on network failure or if anything prevented the request from completing.

- Unless `fetch()` is called with the credentials option set to include, `fetch()`:
  - `won't send cookies in cross-origin requests`
  - `won’t set any cookies sent back in cross-origin responses`

A basic fetch request is really simple to set up. Have a look at the following code:

fetch('http://example.com/movies.json')
```js
  .then(response => response.json())
  .then(data => console.log(data));
  ```

Here we are fetching a JSON file across the network and printing it to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.