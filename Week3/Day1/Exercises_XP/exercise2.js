const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    const number = index + 1;
    const ending = number < 4 ? ordinal[number] : ordinal[0];
    console.log(number + ending + " choice is " + color + ".");
});