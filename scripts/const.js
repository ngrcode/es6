const NAME = "negar";
NAME = "SHADI"; // Uncaught TypeError: Assignment to constant variable.
console.log(NAME);

const NAMES = ["negar"];
NAMES.push("shadi");
console.log(NAMES); //['negar', 'shadi']
