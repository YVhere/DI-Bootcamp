const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display the colors in order: "1# choice is Blue." ...
colors.forEach((color, index) => {
    console.log((index + 1) + "# choice is " + color + ".");
});

// 2. Check if at least one element is "Violet"
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}