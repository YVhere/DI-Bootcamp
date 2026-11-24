// Exercise 4 : Volume of a sphere

const form = document.getElementById("MyForm");

form.addEventListener("submit", function (event) {
    // stop the page from reloading
    event.preventDefault();

    // get the radius the user typed
    const radiusInput = document.getElementById("radius");
    const radius = Number(radiusInput.value);

    // check that it is a real number
    if (isNaN(radius) || radius < 0) {
        alert("Please enter a positive number");
        return;
    }

    // formula: V = 4/3 * PI * r * r * r
    const volume = (4 / 3) * Math.PI * radius * radius * radius;

    // show the result in the Volume input
    const volumeInput = document.getElementById("volume");
    volumeInput.value = volume.toFixed(2);
});