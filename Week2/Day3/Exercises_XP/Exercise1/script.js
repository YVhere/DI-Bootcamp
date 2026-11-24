// Exercise 1 : Change the article

const article = document.querySelector("article");

// 1. Using a DOM property, retrieve the h1 and console.log it
const h1 = article.firstElementChild;
console.log(h1);

// 2. Using DOM methods, remove the last paragraph in the <article> tag
const allParagraphs = article.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
article.removeChild(lastParagraph);

// 3. Change the background color of the h2 to red when it's clicked on
const h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red";
});

// 4. Hide the h3 when it's clicked on (display: none)
const h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
    h3.style.display = "none";
});

// 5. Button that makes the text of all the paragraphs bold
const boldBtn = document.getElementById("boldBtn");
boldBtn.addEventListener("click", function () {
    const paragraphs = document.querySelectorAll("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontWeight = "bold";
    }
});

// 6. BONUS: hover on the h1 -> random font size between 0 and 100px
h1.addEventListener("mouseover", function () {
    const randomSize = Math.floor(Math.random() * 101); // 0 - 100
    h1.style.fontSize = randomSize + "px";
});

// 7. BONUS: hover on the 2nd paragraph -> it fades out
const secondParagraph = document.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseover", function () {
    secondParagraph.classList.add("fade-out");
});