// 1. Transform winBattle() into an arrow function
const winBattle = () => true;

// 2 + 3. Create experiencePoints and assign a ternary operator:
// if winBattle() is true -> 10, else -> 1
let experiencePoints = winBattle() ? 10 : 1;

// 4. Console.log the variable
console.log(experiencePoints); // 10