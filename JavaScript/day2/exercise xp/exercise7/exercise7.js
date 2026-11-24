// 2–3. Array of 2 book objects
let allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/isbn/9780261103344-L.jpg",
    alreadyRead: false
  }
];

// 4. Render each book inside a div in the section
let section = document.querySelector(".listBooks");

for (let i = 0; i < allBooks.length; i++) {
  let book = allBooks[i];

  let div = document.createElement("div");

  // Title and author: "Harry Potter written by J.K. Rowling"
  let details = document.createElement("p");
  details.textContent = book.title + " written by " + book.author;

  // If the book is already read, the details are red
  if (book.alreadyRead === true) {
    details.style.color = "red";
  }

  // Image with width 100px
  let img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  div.appendChild(details);
  div.appendChild(img);
  section.appendChild(div);
}