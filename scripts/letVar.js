/*
 *block scoping
 */

function blockScopingVar() {
  var x = "1";
  if (true) {
    var x = "in if block in var";
  }
  console.log(x);
}

function blockScopingLet() {
  let x = "1";
  if (true) {
    let x = "in if block in let";
  }
  console.log(x);
}

blockScopingVar(); //output is :in if block in var
blockScopingLet(); // 1

let arr = [1, 2, 3, 4];
for (var i = 0; i < arr.length; i++) {}
for (let j = 0; j < arr.length; j++) {}
console.log(i); //output:4
console.log(j); //output:reference error
