/*
 *rest operators
 */

let restOperator = (a, b, ...rest) => {
  console.log(a, b, rest);
};

function arg(a, b) {
  console.log(a, b, arguments);
}

restOperator(1, 2, 3, 4, 5, 6); //1 2 (4) [3, 4, 5, 6]
arg(1, 2, 3, 4, 5, 6); //1 2 Arguments(6) [1, 2, 3, 4, 5, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
