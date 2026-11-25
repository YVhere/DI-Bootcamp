const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

// 1. Convert the JS object into a JSON object
const marioJSON = JSON.stringify(marioGame);
console.log(marioJSON);
// What happens to the nested objects?
// Answer: the nested objects are converted too. Everything becomes ONE long string,
// all the keys get double quotes ("mario", "height"...) and the nested objects
// stay inside as text, on one line.

// 2. Convert and pretty print
const marioPrettyJSON = JSON.stringify(marioGame, null, 2);
console.log(marioPrettyJSON);

// 3. Breakpoint: the code will stop here when the inspector is open
debugger;