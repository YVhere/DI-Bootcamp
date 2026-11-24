// ===== Part 2 =====

// 1. Retrieve the div and console.log it
let div = document.getElementById("container");
console.log(div);

// 2. Change "Pete" to "Richard"
let lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

// 3. Delete the second <li> of the second <ul> (Sarah)
lists[1].children[1].remove();

// 4. Change the first <li> of each <ul> to your name (loop)
for (let i = 0; i < lists.length; i++) {
  lists[i].children[0].textContent = "Yakov";
}

// ===== Part 3 =====

// 1. Add class "student_list" to both <ul>
for (let i = 0; i < lists.length; i++) {
  lists[i].classList.add("student_list");
}

// 2. Add classes "university" and "attendance" to the first <ul>
lists[0].classList.add("university", "attendance");

// ===== Part 4 =====

// 1. Light blue background and padding for the div
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// 2. Do not display the <li> "Dan"
let allLi = document.querySelectorAll("li");
for (let i = 0; i < allLi.length; i++) {
  if (allLi[i].textContent === "Dan") {
    allLi[i].style.display = "none";
  }
}

// 3. Add a border to the <li> "Richard"
for (let i = 0; i < allLi.length; i++) {
  if (allLi[i].textContent === "Richard") {
    allLi[i].style.border = "1px solid black";
  }
}

// 4. Change the font size of the whole body
document.body.style.fontSize = "20px";

// ===== Bonus =====
if (div.style.backgroundColor === "lightblue") {
  let users = lists[0].children;
  alert("Hello " + users[0].textContent + " and " + users[1].textContent);
}