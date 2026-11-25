const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use reduce() to combine all the elements into a single string
const sentence = epic.reduce((accumulator, word) => accumulator + " " + word);

console.log(sentence);
// a long time ago in a galaxy far far away