// exercise 3 Repeat the question
// for this exercise i had to make html file in order to see prompt
let userNumber;

do {
    const input = prompt("Please enter a number:");
    console.log(typeof input);

    userNumber = Number(input);
}
while (userNumber < 10);