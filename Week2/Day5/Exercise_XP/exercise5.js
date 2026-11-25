// 1. Function declaration
function kgToGrams(kg) {
    return kg * 1000;
}
console.log(kgToGrams(2)); // 2000

// 2. Function expression
const kgToGramsExpression = function (kg) {
    return kg * 1000;
};
console.log(kgToGramsExpression(3)); // 3000

// 3. Difference: a function declaration is hoisted (can be called before it is written in the code), a function expression is not (it can only be called after it is defined).

// 4. One line arrow function
const kgToGramsArrow = (kg) => kg * 1000;
console.log(kgToGramsArrow(5)); // 5000