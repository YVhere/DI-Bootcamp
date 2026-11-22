//Part 1 
// exercise 1.1 - remove Greg from the list
// using shift method because Greg is first item in the array 
// otherwise using splice and index
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);

// exercise 1.2 - replace James to Jason
// using splice method where 2 is index of element, 1 is number of items to remove, and Jason to insert
// alternative method is direct indexing 
// people[2] = "Jason";
people.splice(2, 1, "Jason");
console.log(people);

// exercise 1.3 - add your name to the end of the people array
// using push method we can add element directly to the end of the array
people.push("Yakov");
console.log(people);

// exercise 1.4 - console.log MAry's index.
console.log(people.indexOf("Mary"));

// exercise 1.5 - make a copy of the people array using slice method. the copy should not include Mary or Yakov
// in slice method firt number is inclusive and second number is exclusive
const peopleCopy = people.slice(1,3);
console.log(peopleCopy);

// exercise 1.6 - write code that give the index of "Foo". Why does it return -1?
// if the itsm is missing from the array then index is going to be -1
const fooIndex = peopleCopy.indexOf("Foo")
console.log(fooIndex);

// exercise 1.7 - Create a variable called last which value is the last element of the array
// const last = people[people.length -1];
const last = people.at(-1);
console.log(last);

// Part 2
// exercise 1.1 using a loop iterate through the people array and console.log each person
for (const person of people) {
    console.log(person);
}

// exercise 1.2 Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
for (const person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}