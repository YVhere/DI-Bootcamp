// part 1

function displayNumbersDivisible() {
  let numbers = "";
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      numbers = numbers + i + " ";
      sum = sum + i;
    }
  }

  console.log("Outcome : " + numbers);
  console.log("Sum : " + sum);
}

displayNumbersDivisible();

// part 2 (bonus)

function displayNumbersDivisible(divisor) {
  let numbers = "";
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbers = numbers + i + " ";
      sum = sum + i;
    }
  }

  console.log("Outcome : " + numbers);
  console.log("Sum : " + sum);
}

displayNumbersDivisible(23);
displayNumbersDivisible(3);
displayNumbersDivisible(45);