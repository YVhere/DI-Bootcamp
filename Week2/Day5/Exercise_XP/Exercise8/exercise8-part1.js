// Part I

// Outer function: receives the size of the drink
function makeJuice(size) {

    // Inner function: receives 3 ingredients and displays the sentence
    function addIngredients(ing1, ing2, ing3) {
        const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}`;
        document.getElementById("part1").textContent = sentence;
    }

    // Invoke the inner function ONCE inside the outer function
    addIngredients("apple", "banana", "orange");
}

// Invoke the outer function in the global scope
makeJuice("medium");