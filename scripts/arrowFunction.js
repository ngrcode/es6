/**********************************************
 * syntax
 * arrow functions can delete return keyword
 */
let sum = (a, b) => a + b;
let obj1 = (a, b) => ({ a, b });

/*
 * keyword this in class
 */

function Person() {
  this.age = 12;

  setInterval(function () {
    console.log(this.age); //this refers to windows
  }, 1000);
}

const person = new Person(); //undefined

function Person1() {
  this.age = 12;
  let that = this;
  setInterval(function () {
    console.log(that.age); //that refers to Person1
  }, 1000);
}

const person1 = new Person1(); //12

function Person2() {
  this.age = 12;

  setInterval(() => {
    console.log(this.age); // this refers to nearest parent
  }, 1000);
}

const person2 = new Person1(); //12

/************************************************************************
 *prototype in regular and arrow function
 */

function Person4() {}
let Person5 = () => {};
console.log(Person4.prototype); //{constructor: ƒ}
console.log(Person5.prototype); //undefined

console.log(new Person4()); //Person {}
console.log(new Person5()); //arrowFunction.js:57 Uncaught TypeError: Person1 is not a constructor

/**********************************************************
 * arrow function and regular function in object
 */

let obj = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
  c: () => {
    console.log(this.a);
  },
};

obj.b(); //1
obj.c(); //undefined

/*******************************************************************************
 *arguments
 */

function argumentsRegular(a, b) {
  console.log(arguments);
}
let argumentsArrow = (a, b) => {
  console.log(arguments);
};

argumentsRegular(1, 2); //Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
argumentsArrow(1, 2); //arrowFunction.js:49 Uncaught ReferenceError: arguments is not defined
