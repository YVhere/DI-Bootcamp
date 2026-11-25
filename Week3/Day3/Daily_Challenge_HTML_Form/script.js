const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    // Stop the page from reloading
    event.preventDefault();

    // 1. Retrieve the data from the inputs
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;

    // 2. Put the data in an object and convert it to a JSON string
    const user = { name: name, lastname: lastname };
    const userJSON = JSON.stringify(user);

    // 3. Append the JSON string on the DOM
    const p = document.createElement("p");
    p.textContent = userJSON;
    document.getElementById("result").appendChild(p);
});