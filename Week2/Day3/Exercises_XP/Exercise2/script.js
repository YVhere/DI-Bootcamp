// Exercise 2 : Work with forms

// 1. Retrieve the form and console.log it
const form = document.querySelector("form");
console.log(form);

// 2. Retrieve the inputs by their id and console.log them
const fnameById = document.getElementById("fname");
const lnameById = document.getElementById("lname");
console.log(fnameById);
console.log(lnameById);

// 3. Retrieve the inputs by their name attribute and console.log them
const fnameByName = document.getElementsByName("firstname")[0];
const lnameByName = document.getElementsByName("lastname")[0];
console.log(fnameByName);
console.log(lnameByName);

// 4. When the user submits the form
form.addEventListener("submit", function (event) {
    // stop the page from reloading
    event.preventDefault();

    // get the values of the input tags
    const firstName = fnameById.value;
    const lastName = lnameById.value;

    // make sure that they are not empty
    if (firstName === "" || lastName === "") {
        alert("Please fill in both fields");
        return;
    }

    // find the <ul class="usersAnswer">
    const ul = document.querySelector(".usersAnswer");

    // create an li for the first name
    const li1 = document.createElement("li");
    li1.textContent = firstName;
    ul.appendChild(li1);

    // create an li for the last name
    const li2 = document.createElement("li");
    li2.textContent = lastName;
    ul.appendChild(li2);
});