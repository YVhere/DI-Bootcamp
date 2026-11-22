// exercise 2: your favorite colors
// exercise 2.1
const colors = ["Red", "Green", "Yellow", "Blue"];

// exercise 2.2
for (let i = 0; i < colors.length; i++) {
    console.log("My #" + (i + 1) + " choice is " + colors[i])
}

//exercise 2.3(bonus)
const suffixes = ["st", "nd", "rd", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log("My " + (i + 1) + suffixes[i] + " choise is " + colors[i]);
}