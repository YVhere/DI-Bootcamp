function hotelCost() {
    let nights = prompt("How many nights would you like to stay in the hotel?");
    while (nights === null || nights === "" || isNaN(nights)) {
        nights = prompt("Please enter a number of nights:");
    }
    return nights * 140;
}
function planeRideCost() {
    let destination = prompt("What is your destination?");
    while (destination === null || destination === "" || !isNaN(destination)) {
        destination = prompt("Please enter a destination:");
    }
    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days = prompt("How many days would you like to rent the car?");
    while (days === null || days === "" || isNan(days)) {
        days = prompt("please enter a number of days:");
    }
    let cost = days * 40;
    if (days > 10) {
        cost = cost * 0.95; // 5% discount
    }
    return cost;
}
function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();
    console.log("The car cost: $" + car + ", the hotel cost: $" + hotel + ", the plane tockets cost: $" + plane);
    return car + hotel + plane;
}
console.log("Total: $" + totalVacationCost());



