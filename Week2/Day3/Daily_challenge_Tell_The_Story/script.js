// Daily Challenge : Mad Libs

const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle-button");

// global variables to keep the words of the user
let noun = "";
let adjective = "";
let person = "";
let verb = "";
let place = "";

// number of the story shown now (-1 = no story yet)
let currentStory = -1;

// returns a list of stories with the user's words inside
function getStories() {
    return [
        `${person} found a ${adjective} ${noun} in ${place} and started to ${verb} all day.`,
        `In ${place}, a ${adjective} ${noun} taught ${person} how to ${verb}.`,
        `${person} wanted to ${verb} in ${place}, but a ${adjective} ${noun} said NO!`,
        `Every morning in ${place}, ${person} and a ${adjective} ${noun} ${verb} together.`
    ];
}

// shows a random story (different from the current one)
function showRandomStory() {
    const stories = getStories();

    let randomIndex = Math.floor(Math.random() * stories.length);
    while (randomIndex === currentStory) {
        randomIndex = Math.floor(Math.random() * stories.length);
    }

    currentStory = randomIndex;
    storySpan.textContent = stories[randomIndex];
}

// 1-3. When the form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // 1. get the value of each input
    const nounValue = document.getElementById("noun").value;
    const adjectiveValue = document.getElementById("adjective").value;
    const personValue = document.getElementById("person").value;
    const verbValue = document.getElementById("verb").value;
    const placeValue = document.getElementById("place").value;

    // 2. make sure the values are not empty
    if (nounValue === "" || adjectiveValue === "" || personValue === "" ||
        verbValue === "" || placeValue === "") {
        alert("Please fill in all the fields");
        return;
    }

    // save the words in the global variables
    noun = nounValue;
    adjective = adjectiveValue;
    person = personValue;
    verb = verbValue;
    place = placeValue;

    // 3. write a story with the values
    showRandomStory();
});

// 5. Bonus: shuffle button shows another story with the same words
shuffleBtn.addEventListener("click", function () {
    if (noun === "") {
        alert("First fill the form and click 'Lib it!'");
        return;
    }
    showRandomStory();
});