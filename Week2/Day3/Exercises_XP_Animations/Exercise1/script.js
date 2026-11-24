// Exercise 1 : Timer

const container = document.getElementById("container");

// ---------- Part I ----------
// function sayHello() {
//     alert("Hello World");
// }
// setTimeout(sayHello, 2000);


// ---------- Part II ----------
// function addOneParagraph() {
//     const p = document.createElement("p");
//     p.textContent = "Hello World";
//     container.appendChild(p);
// }
// setTimeout(addOneParagraph, 2000);


// ---------- Part III ----------
function addParagraph() {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    // stop when there are 5 paragraphs
    if (container.children.length === 5) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(addParagraph, 2000);

// stop when the user clicks the button
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
    clearInterval(intervalId);
});