// Arrow function that checks if the argument is a string
const isString = (value) => typeof value === "string";

// Check
console.log(isString('hello'));      // true
console.log(isString([1, 2, 4, 0])); // false
