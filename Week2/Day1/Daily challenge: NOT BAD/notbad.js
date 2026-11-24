let sentence = "The movie is not that bad, I like it";

// String method: indexOf() finds the position of each word
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Conditional: both words must exist, and "bad" must come after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // String method: split("") turns the sentence into an array of letters
  let letters = sentence.split("");

  // Array method: splice() removes "not ... bad" and puts "good" in its place
  letters.splice(wordNot, wordBad + 3 - wordNot, "good");

  // Array method: join("") turns the array back into a string
  let result = letters.join("");
  console.log(result);
} else {
  console.log(sentence);
}