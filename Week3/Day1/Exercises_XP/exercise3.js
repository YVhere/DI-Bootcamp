// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// Why: ...vegetables and ...fruits "unpack" the arrays,
// so their elements are put one by one inside the new array.

// ------2------
const country = "USA";
console.log([...country]);
// Output: ['U', 'S', 'A']
// Why: a string can also be spread. Each letter becomes
// a separate element of the array.

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Output: [undefined, undefined]
// Why: [,,] is an array with 2 empty places (the last comma does not count).
// When we spread it, each empty place becomes undefined.