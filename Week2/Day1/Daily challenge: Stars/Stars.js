// using one loop

let stars = "";

for (let i = 1; i <= 6; i++) {
  stars = stars + "* ";
  console.log(stars);
}

// using two nested loops

for (let i = 1; i <= 6; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }

  console.log(row);
}