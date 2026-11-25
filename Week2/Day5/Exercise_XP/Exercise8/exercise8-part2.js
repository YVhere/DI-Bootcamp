// Part II

function makeJuice(size) {
    // 1. Empty array for the ingredients
    const ingredients = [];

    // 2. Receives 3 ingredients and pushes them into the array
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    // 3. Displays the sentence with all the ingredients
    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
        document.getElementById("part2").textContent = sentence;
    }

    // 4. The client wants 6 ingredients -> addIngredients TWICE, then displayJuice once
    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "kiwi", "strawberry");
    displayJuice();
}

// Invoke makeJuice in the global scope
makeJuice("large");