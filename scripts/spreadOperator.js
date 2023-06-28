/*
 * spread operator in es6
 */

let arr1 = [1, 2, 3];

const sumNum = (a, b, c) => {
  console.log(a + b + c);
};

sumNum.apply(null, arr1); //es5 : 6
sumNum(...arr1); //es6 : 6
