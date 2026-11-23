let planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "sandybrown", moons: 4 },
  { name: "Saturn", color: "gold", moons: 5 },
  { name: "Uranus", color: "lightblue", moons: 3 },
  { name: "Neptune", color: "darkblue", moons: 2 }
];

let section = document.querySelector(".listPlanets");

for (let i = 0; i < planets.length; i++) {
  let planet = planets[i];

  let div = document.createElement("div");
  div.classList.add("planet");
  div.classList.add(planet.name.toLowerCase());
  div.style.backgroundColor = planet.color;
  div.style.marginBottom = "20px";
  div.textContent = planet.name;

  // Moons: a nested loop creates as many moons as the planet has
  for (let j = 0; j < planet.moons; j++) {
    let moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.top = "35px";
    moon.style.left = (140 + j * 50) + "px"; // moons in a row to the right
    div.appendChild(moon);
  }

  section.appendChild(div);
}