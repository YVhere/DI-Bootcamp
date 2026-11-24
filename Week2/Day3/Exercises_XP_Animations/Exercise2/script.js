// Exercise 2 : Move the box

function myMove() {
    const box = document.getElementById("animate");
    let position = 0;

    // every 1 millisecond, call the function frame
    const intervalId = setInterval(frame, 1);

    function frame() {
        if (position === 350) {
            // the box reached the right side -> stop
            clearInterval(intervalId);
        } else {
            // move the box 1px to the right
            position++;
            box.style.left = position + "px";
        }
    }
}