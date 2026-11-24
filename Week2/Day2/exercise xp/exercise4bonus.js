function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  if (destination === "London") {
    return 183;
  } else if (destination === "Paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost(days) {
  let cost = days * 40;

  if (days > 10) {
    cost = cost * 0.95;
  }

  return cost;
}

function totalVacationCost() {
  let nights = prompt("How many nights would you like to stay in the hotel?");
  while (nights === null || nights === "" || isNaN(nights)) {
    nights = prompt("Please enter a number of nights:");
  }

  let destination = prompt("What is your destination?");
  while (destination === null || destination === "" || !isNaN(destination)) {
    destination = prompt("Please enter a destination:");
  }

  let days = prompt("How many days would you like to rent the car?");
  while (days === null || days === "" || isNaN(days)) {
    days = prompt("Please enter a number of days:");
  }

  let hotel = hotelCost(nights);
  let plane = planeRideCost(destination);
  let car = rentalCarCost(days);

  console.log("The car cost: $" + car + ", the hotel cost: $" + hotel + ", the plane tickets cost: $" + plane);

  return car + hotel + plane;
}

console.log("Total: $" + totalVacationCost());