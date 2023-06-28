/*
 *handle default parameters in es5 an es6
 */

function sum(a, b) {
  console.log(a + b);
}

sum(1); //NaN

function sum(x, y) {
  let a = x ? x : 1;
  let b = y ? y : 1;
  console.log(a + b);
}
sum(1);

function sum(x, y) {
  let a = x || 1;
  let b = y || 1;
  console.log(a + b);
}

sum(1); //2

function sum(a = 1, b = 1) {
  console.log(a + b);
}

sum(1); //2
