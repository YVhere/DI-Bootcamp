// 2. Change the id from "navBar" to "socialNetworkNavigation"
let div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");
console.log(div);

// 3. Add a new <li> with "Logout"
let ul = div.querySelector("ul");

let newLi = document.createElement("li");          // 3.1 create <li>
let text = document.createTextNode("Logout");      // 3.2 create text node
newLi.appendChild(text);                           // 3.3 put text inside <li>
ul.appendChild(newLi);                             // 3.4 add <li> to <ul>

// 4. First and last <li> of the <ul>
let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;

console.log(firstLi.textContent); // Profile
console.log(lastLi.textContent);  // Logout