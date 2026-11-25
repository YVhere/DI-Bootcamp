// Self invoking function that takes 1 argument: the user name
(function (userName) {
    // 1. Create a new div
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    // 2. Create the profile picture
    const img = document.createElement("img");
    img.src = "https://i.pravatar.cc/40";
    img.alt = "profile picture";

    // 3. Create the text with the name
    const text = document.createElement("span");
    text.textContent = `Welcome, ${userName}!`;

    // 4. Put the picture and the text inside the div
    userDiv.appendChild(img);
    userDiv.appendChild(text);

    // 5. Add the div to the navbar
    document.getElementById("navbar").appendChild(userDiv);
})("John");