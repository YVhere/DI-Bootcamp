// Exercise 3 : Transform the sentence

// 1. Declare a global variable named allBoldItems
let allBoldItems;

// 2. Collect all the bold items inside the paragraph
function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}

// 3. Change the color of all the bold text to blue
function highlight() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "blue";
    }
}

// 4. Change the color of all the bold text back to black
function returnItemsToDefault() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black";
    }
}

// call the function so allBoldItems gets filled
getBoldItems();

// 5. mouseover -> highlight, mouseout -> returnItemsToDefault
const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);