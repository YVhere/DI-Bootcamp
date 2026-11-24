function changeEnough(itemPrice, amountOfChange) {
  let coinValues = [0.25, 0.10, 0.05, 0.01];
  let total = 0;

  for (let i = 0; i < amountOfChange.length; i++) {
    total = total + amountOfChange[i] * coinValues[i];
  }

  if (total >= itemPrice) {
    return true;
  } else {
    return false;
  }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));  // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5]));   // true