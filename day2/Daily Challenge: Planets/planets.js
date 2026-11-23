// 1. Array of planets
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// A different color for each planet (same order as planets)
let colors = ["gray", "orange", "blue", "red", "sandybrown", "gold", "lightblue", "darkblue"];

let section = document.querySelector(".listPlanets");

for (let i = 0; i < planets.length; i++) {
  // 2. Create a div with class "planet"
  let div = document.createElement("div");
  div.classList.add("planet");

  // 3. Different class and background color for each planet
  div.classList.add(planets[i].toLowerCase());
  div.style.backgroundColor = colors[i];

  div.textContent = planets[i];

  // 4. Append the div to the section
  section.appendChild(div);
}